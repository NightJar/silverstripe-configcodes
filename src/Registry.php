<?php

namespace Nightjar\ConfigCodes;

/**
 * Maintains a registry of shortcodes
 *
 * Used by {@see HandlerBroker} to pair codes with handlers.
 * Using an interface abstracts e.g. the Silverstripe Config layer, decoupling it as a dependency.
 */
interface Registry
{
    public function listParsers(): array;

    public function getCodesForParser(string $parserName): array;

    public function getHandlerForCode(string $code, string $parser = 'default'): ?Handler;
}
