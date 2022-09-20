<?php

namespace Nightjar\ConfigCodes\Test;

use Nightjar\ConfigCodes\HandlerBroker;
use Nightjar\ConfigCodes\InstanceIdentifiableShortcodeParser;
use Nightjar\ConfigCodes\Registry;
use Nightjar\ConfigCodes\Test\Fixture\Affirmative;
use Nightjar\ConfigCodes\Test\Fixture\Negative;
use Nightjar\ConfigCodes\Test\Fixture\TestHandler;
use Nightjar\ConfigCodes\Test\Fixture\TestRegistry;
use Nightjar\ConfigCodes\Test\Fixture\TestShortcode;
use SilverStripe\Core\Config\Config;
use SilverStripe\Core\Injector\Injector;
use SilverStripe\Dev\SapphireTest;
use SilverStripe\ORM\FieldType\DBHTMLText;
use SilverStripe\ORM\FieldType\DBHTMLVarchar;
use SilverStripe\View\Parsers\ShortcodeParser;

class HandlerBrokerTest extends SapphireTest
{
    private $originalActiveParser;

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

    public function tearDown(): void
    {
        ShortcodeParser::set_active($this->originalActiveParser);
        ShortcodeParser::get('test')->clear();
        ShortcodeParser::get('answers')->clear();
        parent::tearDown();
    }

    public function testGetShortcodes()
    {
        $this->assertSame(['test', 'yes', 'no', 'maybe'], HandlerBroker::get_shortcodes());
    }

    public function testHandleShortcode()
    {
        $this->assertSame(
            'The test title',
            HandlerBroker::handle_shortcode([], null, ShortcodeParser::get_active(), 'test')
        );
    }

    public function testUndefinedCodesReturnFalse()
    {
        ShortcodeParser::set_active('undefined');
        $undefinedParser = ShortcodeParser::get_active();
        $this->assertFalse(HandlerBroker::handle_shortcode([], null, $undefinedParser, 'test'));
        $this->assertFalse(HandlerBroker::handle_shortcode([], null, $undefinedParser, 'yes'));
        $this->assertFalse(HandlerBroker::handle_shortcode([], null, $undefinedParser, 'maybe'));
        $this->assertFalse(HandlerBroker::handle_shortcode([], null, $undefinedParser, 'no'));
    }

    public function testHandleShortcodeIsLimitedByParserInstance()
    {
        ShortcodeParser::set_active('undefined');
        $undefinedParser = ShortcodeParser::get_active();
        $this->assertNotSame('The test title', HandlerBroker::handle_shortcode([], null, $undefinedParser, 'test'));
        $this->assertNotSame('Yep.', HandlerBroker::handle_shortcode([], null, $undefinedParser, 'yes'));
        $this->assertFalse(HandlerBroker::handle_shortcode([], null, $undefinedParser, 'maybe'));
        $this->assertNotSame('Nope', HandlerBroker::handle_shortcode([], null, $undefinedParser, 'no'));

        ShortcodeParser::set_active('answers');
        $answerParser = ShortcodeParser::get_active();
        $this->assertNotSame('The test title', HandlerBroker::handle_shortcode([], null, $answerParser, 'test'));
        $this->assertSame('Yep.', HandlerBroker::handle_shortcode([], null, $answerParser, 'yes'));
        $this->assertSame(
            '<strong>Might</strong> do...',
            HandlerBroker::handle_shortcode([], null, $answerParser, 'maybe')
        );
        $this->assertSame('Nope', HandlerBroker::handle_shortcode([], null, $answerParser, 'no'));

        ShortcodeParser::set_active('test');
        $testParser = ShortcodeParser::get_active();
        $this->assertSame('The test title', HandlerBroker::handle_shortcode([], null, $testParser, 'test'));
        $this->assertNotSame('Yep.', HandlerBroker::handle_shortcode([], null, $testParser, 'yes'));
        $this->assertNotSame(
            '<strong>Might</strong> do...',
            HandlerBroker::handle_shortcode([], null, $testParser, 'maybe')
        );
        $this->assertFalse(HandlerBroker::handle_shortcode([], null, $testParser, 'no'));
    }

    public function testRegisterShortcodesAndIntegration()
    {
        HandlerBroker::register_shortcodes();

        $text = new DBHTMLText();
        $text->setValue('This is [test].');
        $text->setProcessShortcodes(true);
        $this->assertSame('This is The test title.', $text->forTemplate());

        $varchar = new DBHTMLVarchar();
        $varchar->setValue('This is [test].');
        $varchar->setProcessShortcodes(true);
        $this->assertSame('This is The test title.', $varchar->forTemplate());
    }
}
