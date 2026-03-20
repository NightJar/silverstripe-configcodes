<?php

namespace Nightjar\ConfigCodes\Test\Registry;

use Nightjar\ConfigCodes\Registry\ConfigReader;
use Nightjar\ConfigCodes\Test\Fixture\TestShortcode;
use SilverStripe\Core\Config\Config;
use SilverStripe\Dev\SapphireTest;

class ConfigReaderTest extends SapphireTest
{
    protected function setUp(): void
    {
        parent::setUp();

        Config::modify()->set(ConfigReader::class, 'shortcodes', [
            'default' => [
                'test' => TestShortcode::class,
            ],
            'answers' => [
                'yes' => TestShortcode::class,
                'no' => TestShortcode::class,
                'maybe' => TestShortcode::class,
            ],
        ]);
    }

    public function testListParsers(): void
    {
        $this->assertSame(
            ['default', 'answers'],
            (new ConfigReader())->listParsers()
        );
    }

    public function testGetCodesForParser(): void
    {
        $this->assertSame(
            ['yes', 'no', 'maybe'],
            (new ConfigReader())->getCodesForParser('answers')
        );
    }

    public function testGetHandlerForCode(): void
    {
        $this->assertInstanceOf(TestShortcode::class, (new ConfigReader())->getHandlerForCode('test'));
    }
}
