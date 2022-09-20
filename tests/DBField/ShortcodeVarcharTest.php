<?php

namespace Nightjar\ConfigCodes\Test\DBField;

use Nightjar\ConfigCodes\DBField\ShortcodeVarchar;
use Nightjar\ConfigCodes\InstanceIdentifiableShortcodeParser;
use SilverStripe\Core\Config\Config;
use SilverStripe\Dev\SapphireTest;
use SilverStripe\View\ArrayData;
use SilverStripe\View\SSViewer;

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

    public function testShortcodeProcessing()
    {
        $viewer = SSViewer::fromString('This is $Title.');
        $titleField = new ShortcodeVarchar('Title');
        $titleField->setValue('A test of the [test]')->setProcessShortcodes(true);
        $templateData = new ArrayData([
            'Title' => $titleField
        ]);
        $result = $templateData->renderWith($viewer);
        $this->assertSame('This is A test of the The test title.', $result);
    }

    public function testShortcodesAreUnaffectedIfNotEnabled()
    {
        $viewer = SSViewer::fromString('This is $Title.');
        $titleField = new ShortcodeVarchar('Title');
        $titleField->setValue('A test of the [test]');
        $templateData = new ArrayData([
            'Title' => $titleField
        ]);
        $result = $templateData->renderWith($viewer);
        $this->assertSame('This is A test of the [test].', $result);
    }

    public function testTheActiveParserIsUsed()
    {
        $viewer = SSViewer::fromString('The $Title.');
        $titleField = new ShortcodeVarchar('Answer');
        $titleField->setValue('answer is [no]')->setProcessShortcodes(true);
        $templateData = new ArrayData([
            'Title' => $titleField
        ]);
        $result = $templateData->renderWith($viewer);
        $this->assertSame('The answer is [no].', $result);
    }

    public function testTheSpecificlySetParserDoesNotAffectTheGlobalActiveParser()
    {
        $viewer = SSViewer::fromString('The $Title');
        $titleField = new ShortcodeVarchar('Answer');
        $titleField->setValue('answer is [yes]')
            ->setProcessShortcodes(true)
            ->setParserName('answers');
        $templateData = new ArrayData([
            'Title' => $titleField
        ]);
        $result = $templateData->renderWith($viewer);
        $this->assertSame('The answer is Yep.', $result);

        $globallyActiveParser = InstanceIdentifiableShortcodeParser::get_active();
        $this->assertSame('test', $globallyActiveParser->getInstanceName());
    }
}
