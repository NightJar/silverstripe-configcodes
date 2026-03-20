<?php

namespace Nightjar\ConfigCodes;

use SilverStripe\Core\Injector\Injector;
use SilverStripe\View\Parsers\ShortcodeHandler;
use SilverStripe\View\Parsers\ShortcodeParser;

class HandlerBroker implements ShortcodeHandler
{
    public static function get_registry(): Registry
    {
        return Injector::inst()->get(Registry::class);
    }

    /**
     * ShortcodeHandler interface isn't really used anywhere in the framework or supported module codebase
     * This function in particular is never referenced from any function
     * But we'll implement it anyway. We cannot filter by parser name at this point though, so we'll just return
     * every code from all handlers configured on this class.
     *
     * @return string[]
     */
    public static function get_shortcodes(): array
    {
        $registry = self::get_registry();
        $codes = [];
        foreach ($registry->listParsers() as $parserName) {
            $codes = array_merge($codes, $registry->getCodesForParser($parserName));
        }
        return $codes;
    }

    /**
     * @inheritDoc
     * @param array<string,string> $arguments
     * @param ?string $content
     * @param InstanceIdentifiableShortcodeParser $parser
     * @param array{node?:\DOMAttr,element?:\DOMElement} $extra
     * @return string|false
     */
    public static function handle_shortcode($arguments, $content, $parser, $shortcode, $extra = [])
    {
        $parserName = $parser->getInstanceName();
        $registry = self::get_registry();
        $handlerService = $registry->getHandlerForCode($shortcode, $parserName);
        if (!$handlerService) {
            return false;
        }
        $processedCode = $handlerService->process($arguments, $content);
        return  is_string($processedCode) ? $processedCode : false;
    }

    /**
     * registers a shortcode with the parser and how to handle it locally.
     */
    public static function register_shortcodes(): void
    {
        $registry = self::get_registry();
        foreach ($registry->listParsers() as $parserName) {
            foreach ($registry->getCodesForParser($parserName) as $code) {
                ShortcodeParser::get($parserName)->register($code, [self::class, 'handle_shortcode']);
            }
        }
    }
}
