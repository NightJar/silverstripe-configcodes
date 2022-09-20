<?php

namespace Nightjar\ConfigCodes\Test\DBField;

use Nightjar\ConfigCodes\DBField\ShortcodeVarchar;
use Nightjar\ConfigCodes\HandlerBroker;
use Nightjar\ConfigCodes\InstanceIdentifiableShortcodeParser;
use Nightjar\ConfigCodes\Registry;
use Nightjar\ConfigCodes\Test\Fixture\Affirmative;
use Nightjar\ConfigCodes\Test\Fixture\Negative;
use Nightjar\ConfigCodes\Test\Fixture\TestHandler;
use Nightjar\ConfigCodes\Test\Fixture\TestRegistry;
use Nightjar\ConfigCodes\Test\Fixture\TestShortcode;
use SilverStripe\Core\Injector\Injector;
use SilverStripe\View\Parsers\ShortcodeParser;

trait CommonFunctions
{
    protected function setUp(): void
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
                    'html' => new TestShortcode('A <small>little</small> bit')
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

    protected function tearDown(): void
    {
        ShortcodeParser::set_active($this->originalActiveParser);
        ShortcodeParser::get('test')->clear();
        ShortcodeParser::get('answers')->clear();
        parent::tearDown();
    }
}
