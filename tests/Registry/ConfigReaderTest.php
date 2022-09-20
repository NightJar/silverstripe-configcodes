<?php

namespace NZTA\ConfigCodes\Test\Registry;

use NZTA\ConfigCodes\Registry\ConfigReader;
use NZTA\ConfigCodes\Test\Fixture\TestShortcode;
use SilverStripe\Core\Config\Config;
use SilverStripe\Dev\SapphireTest;

class ConfigReaderTest extends SapphireTest
{
    protected static $extra_dataobjects = [
        TestShortcode::class,
    ];

    public function setUp()
    {
        parent::setUp();

        Config::inst()->set(ConfigReader::class, 'shortcodes', [
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

    public function testListParsers()
    {
        $this->assertSame(
            ['default', 'answers'],
            (new ConfigReader())->listParsers()
        );
    }

    public function testGetCodesForParser()
    {
        $this->assertSame(
            ['yes', 'no', 'maybe'],
            (new ConfigReader())->getCodesForParser('answers')
        );
    }

    public function testGetHandlerForCode()
    {
        $this->assertInstanceOf(TestShortcode::class, (new ConfigReader())->getHandlerForCode('test'));
    }
}
