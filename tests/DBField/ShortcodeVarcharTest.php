<?php

namespace NZTA\ConfigCodes\Test\DBField;

use NZTA\ConfigCodes\DBField\ShortcodeVarchar;
use NZTA\ConfigCodes\HandlerBroker;
use NZTA\ConfigCodes\InstanceIdentifiableShortcodeParser;
use NZTA\ConfigCodes\Registry;
use NZTA\ConfigCodes\Test\Fixture\Affirmative;
use NZTA\ConfigCodes\Test\Fixture\Negative;
use NZTA\ConfigCodes\Test\Fixture\TestHandler;
use NZTA\ConfigCodes\Test\Fixture\TestRegistry;
use NZTA\ConfigCodes\Test\Fixture\TestShortcode;
use SilverStripe\Core\Injector\Injector;
use SilverStripe\Dev\SapphireTest;
use SilverStripe\View\ArrayData;
use SilverStripe\View\Parsers\ShortcodeParser;
use SilverStripe\View\SSViewer;

class ShortcodeVarcharTest extends SapphireTest
{
    public function setUp()
    {
        parent::setUp();

        $injector = Injector::inst();
        $injector->load([ShortcodeParser::class => InstanceIdentifiableShortcodeParser::class]);
        $this->originalActiveParser = ShortcodeParser::get_active()->getInstanceName();
        ShortcodeParser::set_active('test');

        $injector->registerService(
            new TestRegistry([
                'test' => [
                    'test' => new TestShortcode(),
                ],
                'answers' => [
                    'yes' => new TestHandler(new Affirmative(), 'substituteText'),
                    'no' => new TestHandler(new Negative(), 'deny'),
                    'maybe' => new TestHandler(new Negative(), 'possible'),
                ]
            ]),
            Registry::class
        );
        HandlerBroker::register_shortcodes();
    }

    public function tearDown()
    {
        ShortcodeParser::set_active($this->originalActiveParser);
        ShortcodeParser::get('test')->clear();
        ShortcodeParser::get('answers')->clear();
        parent::tearDown();
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
