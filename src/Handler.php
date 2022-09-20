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
     * @return array
     */
    public static function getParameters(): array;

    /**
     * Whether or not this handler relies on content being set
     *
     * @return bool|null null if the code does not accept content
     */
    public static function getRequiresContent(): ?bool;

    /**
     * Process a shortcode someone has embedded into content
     *
     * Returns the processed string or null on failure
     * @see HandlerBroker::handle_shortcode()
     * @see ShortcodeParser::getShortcodeReplacementText()
     *
     * @param array $arguments
     * @param string $content
     * @return string|null
     */
    public function process(array $arguments = [], ?string $content = null): ?string;
}
