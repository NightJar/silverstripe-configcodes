<?php

namespace Nightjar\ConfigCodes\Test\DBField;

use Nightjar\ConfigCodes\DBField\ShortcodeVarchar;
use Nightjar\ConfigCodes\InstanceIdentifiableShortcodeParser;
use SilverStripe\Core\Config\Config;
use SilverStripe\Dev\SapphireTest;
use SilverStripe\Model\ArrayData;
use SilverStripe\Model\ModelData;
use SilverStripe\TemplateEngine\SSTemplateEngine;
use SilverStripe\View\Parsers\ShortcodeParser;
use SilverStripe\View\ViewLayerData;

class ShortcodeVarcharTest extends SapphireTest
{
    use CommonFunctions {
        setUp as private mainSetUp;
    }

    protected function setUp(): void
    {
        $this->mainSetUp();
        Config::modify()->set(ShortcodeVarchar::class, 'default_full_output', true);
    }

    public function testShortcodeProcessing(): void
    {
        $titleField = new ShortcodeVarchar('Title');
        $titleField->setValue('A test of the [test]')->setProcessShortcodes(true);
        $templateData = new ArrayData([
            'Title' => $titleField,
        ]);
        $result = $this->renderTemplateFromString('This is $Title.', $templateData);
        $this->assertSame('This is A test of the The test title.', $result);
    }

    public function testShortcodesAreUnaffectedIfNotEnabled(): void
    {
        $titleField = new ShortcodeVarchar('Title');
        $titleField->setValue('A test of the [test]');
        $templateData = new ArrayData([
            'Title' => $titleField,
        ]);
        $result = $this->renderTemplateFromString('This is $Title.', $templateData);
        $this->assertSame('This is A test of the [test].', $result);
    }

    public function testTheActiveParserIsUsed(): void
    {
        $titleField = new ShortcodeVarchar('Answer');
        $titleField->setValue('answer is [no]')->setProcessShortcodes(true);
        $templateData = new ArrayData([
            'Title' => $titleField,
        ]);
        $result = $this->renderTemplateFromString('The $Title.', $templateData);
        $this->assertSame('The answer is [no].', $result);
    }

    public function testTheSpecificlySetParserDoesNotAffectTheGlobalActiveParser(): void
    {
        $titleField = new ShortcodeVarchar('Answer');
        $titleField->setValue('answer is [yes]')
            ->setProcessShortcodes(true)
            ->setParserName('answers');
        $templateData = new ArrayData([
            'Title' => $titleField,
        ]);
        $result = $this->renderTemplateFromString('The $Title', $templateData);
        $this->assertSame('The answer is Yep.', $result);

        /** @var InstanceIdentifiableShortcodeParser $globallyActiveParser */
        $globallyActiveParser = ShortcodeParser::get_active();
        $this->assertSame('test', $globallyActiveParser->getInstanceName());
    }

    private function renderTemplateFromString(string $string, ModelData $data): string
    {
        return (new SSTemplateEngine())->renderString($string, new ViewLayerData($data));
    }
}
