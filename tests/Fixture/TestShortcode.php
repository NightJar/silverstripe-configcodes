<?php

namespace Nightjar\ConfigCodes\Test\Fixture;

use Nightjar\ConfigCodes\Handler;
use SilverStripe\Dev\TestOnly;

class TestShortcode implements TestOnly, Handler
{
    private string $output;

    public function __construct(string $output = 'The test title')
    {
        $this->output = $output;
    }

    public static function getParameters(): array
    {
        return [];
    }

    public static function getRequiresContent(): bool
    {
        return false;
    }

    public function process(array $arguments = [], ?string $content = null): ?string
    {
        return $this->output;
    }
}
