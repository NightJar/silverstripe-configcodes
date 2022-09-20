<?php

namespace Nightjar\ConfigCodes\Test\Fixture;

use Nightjar\ConfigCodes\Handler;
use Nightjar\ConfigCodes\Registry;

class TestRegistry implements Registry
{
    private $registeredCodes = [];

    public function __construct(array $codeDefinitions)
    {
        $this->registeredCodes = $codeDefinitions;
    }

    public function listParsers(): array
    {
        return array_keys($this->registeredCodes);
    }

    public function getCodesForParser(string $parserName): array
    {
        return array_keys($this->registeredCodes[$parserName]);
    }

    public function getHandlerForCode(string $code, string $parser = 'default'): ?Handler
    {
        return $this->registeredCodes[$parser][$code] ?? null;
    }
}
