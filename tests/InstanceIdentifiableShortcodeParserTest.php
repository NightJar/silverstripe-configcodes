<?php

namespace Nightjar\ConfigCodes\Test;

use Nightjar\ConfigCodes\InstanceIdentifiableShortcodeParser;
use SilverStripe\Core\Injector\Injector;
use SilverStripe\Dev\SapphireTest;
use SilverStripe\View\Parsers\ShortcodeParser;

class InstanceIdentifiableShortcodeParserTest extends SapphireTest
{
    protected function setUp(): void
    {
        parent::setUp();
        Injector::inst()->load([ShortcodeParser::class => InstanceIdentifiableShortcodeParser::class]);
    }

    public function testGettingStaticActiveIdentifier(): void
    {
        $this->assertSame('default', InstanceIdentifiableShortcodeParser::get_active_identifier());
        ShortcodeParser::set_active('Not the default');
        $this->assertSame('Not the default', InstanceIdentifiableShortcodeParser::get_active_identifier());
    }

    public function testInstanceNameIsSetOnCreate(): void
    {
        ShortcodeParser::set_active('test');
        /** @var InstanceIdentifiableShortcodeParser $parser */
        $parser = ShortcodeParser::get_active();
        $this->assertInstanceOf(InstanceIdentifiableShortcodeParser::class, $parser);
        $this->assertSame('test', $parser->getInstanceName());
    }

    public function testInstanceNameIsSetOnFetch(): void
    {
        ShortcodeParser::set_active('Alan');
        /** @var InstanceIdentifiableShortcodeParser $alan */
        $alan = ShortcodeParser::get_active();
        /** @var InstanceIdentifiableShortcodeParser $chris */
        $chris = ShortcodeParser::get('Christopher');
        $this->assertSame('Christopher', $chris->getInstanceName());
        $this->assertSame('Alan', $alan->getInstanceName(), 'Another instances name should not be affected');
    }
}
