<?php

namespace Nightjar\ConfigCodes;

/**
 * Maintains a registry of shortcodes
 *
 * Used by {@see HandlerBroker} to pair codes with handlers.
 * Using an interface abstracts e.g. the Silverstripe Config layer, decoupling it as a dependency.
 *
 * Assumes some of the duties of the Frameworks ShortcodeParser
 * @see \SilverStripe\View\Parsers\ShortcodeParser::$instances
 * @see \SilverStripe\View\Parsers\ShortcodeParser::$shortcodes
 */
interface Registry
{
    /**
     * @return string[]
     */
    public function listParsers(): array;

    /**
     * @return string[]
     */
    public function getCodesForParser(string $parserName): array;

    public function getHandlerForCode(string $code, string $parser = 'default'): ?Handler;
}
