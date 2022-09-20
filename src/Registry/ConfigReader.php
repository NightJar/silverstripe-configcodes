<?php

namespace Nightjar\ConfigCodes\Registry;

use Nightjar\ConfigCodes\Handler;
use Nightjar\ConfigCodes\Registry;
use SilverStripe\Core\Config\Configurable;
use SilverStripe\Core\Injector\Injector;

class ConfigReader implements Registry
{
    use Configurable;

    public function listParsers(): array
    {
        return array_keys(self::config()->get('shortcodes') ?? []);
    }

    public function getCodesForParser(string $parser): array
    {
        return array_keys(self::config()->get('shortcodes')[$parser] ?? []);
    }

    public function getHandlerForCode(string $code, string $parser = 'default'): ?Handler
    {
        $service = self::config()->get('shortcodes')[$parser][$code] ?? null;
        return $service ? Injector::inst()->get($service) : null;
    }
}
