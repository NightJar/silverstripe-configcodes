<?php

namespace Nightjar\ConfigCodes\Test\DBField;

use Nightjar\ConfigCodes\DBField\ShortcodeText;
use SilverStripe\Core\Config\Config;
use SilverStripe\Dev\SapphireTest;
use SilverStripe\ORM\FieldType\DBText;

class ShortcodeTextTest extends SapphireTest
{
    use CommonFunctions {
        setUp as private mainSetUp;
    }

    protected function setUp(): void
    {
        $this->mainSetUp();
        Config::modify()->set(ShortcodeText::class, 'default_full_output', false);
    }

    private string $testDescription = <<<DESC
This is a description
for the "[html]" product

But it does a poor job describing it. Although someone has sneak a cheeky <b>bold tag</b> into it.
DESC;

    public function testShortcodeProcessingObeysDefaultOutputConfig()
    {
        $descriptionField = new ShortcodeText();
        $descriptionField->setValue($this->testDescription);
        $descriptionField->setProcessShortcodes(true);

        $this->assertStringContainsString(
            'A little bit',
            $descriptionField->forTemplate(),
            'The HTML introduced by the shortcode should be stripped'
        );
        $this->assertStringContainsString(
            '&lt;b&gt;bold tag&lt;/b&gt;',
            $descriptionField->forTemplate(),
            'The bold tag should be escaped'
        );

        Config::modify()->set(ShortcodeText::class, 'default_full_output', true);

        $this->assertStringContainsString(
            'A <small>little</small> bit',
            $descriptionField->forTemplate(),
            'The HTML introduced by the shortcode should remain'
        );
        $this->assertStringContainsString(
            '&lt;b&gt;bold tag&lt;/b&gt;',
            $descriptionField->forTemplate(),
            'The bold tag should still be escaped'
        );
    }

    public function testFullOutput()
    {
        $descriptionField = new ShortcodeText();
        $descriptionField->setValue($this->testDescription);
        $descriptionField->setProcessShortcodes(true);
        $this->assertStringContainsString('A <small>little</small> bit', $descriptionField->Full());
    }

    public function testPlainOutput()
    {
        $descriptionField = new ShortcodeText();
        $descriptionField->setValue($this->testDescription);
        $descriptionField->setProcessShortcodes(true);
        $this->assertStringContainsString('A little bit', $descriptionField->Plain());
    }

    /**
     * Don't surprise people when they enable this feature by changing output all over their site
     */
    public function testOutputIsBackwardsCompatibleWithParentClass()
    {
        $shortcoded = new ShortcodeText();
        $standard = new DBText();
        $shortcoded->setValue('Example [html] value');
        $standard->setValue('Example [html] value');

        $outputFunctions = [
            'getValue',
            'RAW',
            'forTemplate',
            'Plain',
            'Summary',
            'firstSentence',
            'firstParagraph',
            'ContextSummary',
        ];

        foreach ($outputFunctions as $displayMethod) {
            $this->assertSame(
                $standard->$displayMethod(),
                $shortcoded->$displayMethod(),
                "Output formatting function $displayMethod should match when shortcodes are not processed"
            );
        }

        $shortcoded->setProcessShortcodes(true);
        $standard->setValue('Example A little bit value');

        $plainOutputFunctions = array_diff($outputFunctions, [
            'getValue', // always returns the completely unprocessed database value
            'RAW', // parses shortcodes (when enabled) - need to have HTML in the DBText value (see end of function)
        ]);

        foreach ($plainOutputFunctions as $displayMethod) {
            $this->assertSame(
                $standard->$displayMethod(),
                $shortcoded->$displayMethod(),
                "Output formatting function $displayMethod should match when shortcodes are processed"
            );
        }

        $standard->setValue('Example A <small>little</small> bit value');
        $this->assertSame($standard->RAW(), $shortcoded->RAW());
    }

    public function testDefaultCastsExistCorrectlyWhenHavingNonStringValues()
    {
        $shortcoded = new ShortcodeText();
        $standard = new DBText();
        foreach ([true, false, 0, 1, 27] as $returnValueToCast) {
            $this->assertSame(
                $standard->setValue($returnValueToCast)->exists(),
                $shortcoded->setValue($returnValueToCast)->exists()
            );
        }
    }
}
