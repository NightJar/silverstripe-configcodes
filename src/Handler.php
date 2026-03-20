<?php

namespace Nightjar\ConfigCodes;

interface Handler
{
    /**
     * Parameters this handler accepts
     *
     * Array in the format:
     * parameter Name => Required (bool)
     *
     * @return array<string,bool>
     */
    public static function getParameters(): array;

    /**
     * Whether or not this handler relies on content being set
     */
    public static function getRequiresContent(): ?bool;

    /**
     * Process a shortcode someone has embedded into content
     *
     * Returns the processed string or null on failure
     * @see HandlerBroker::handle_shortcode()
     * @see \Silverstripe\View\Parsers\ShortcodeParser::getShortcodeReplacementText()
     *
     * @param array<string,string|int> $arguments
     */
    public function process(array $arguments = [], ?string $content = null): ?string;
}
