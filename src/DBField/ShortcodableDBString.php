<?php

namespace Nightjar\ConfigCodes\DBField;

use SilverStripe\View\Parsers\ShortcodeParser;

trait ShortcodableDBString
{
    /**
     * Enable shortcode parsing on this field
     *
     * @see self::getProcessShortcodes()
     * @see self::setProcessShortcodes()
     */
    protected bool $processShortcodes = false;

    /**
     * The name of the shortcode parser to use.
     *
     * If unset (null) it will use the current active instance.
     * @see ShortcodeParser::get_active
     */
    protected ?string $parserName = null;

    /**
     * Check if shortcodes are enabled
     */
    public function getProcessShortcodes(): bool
    {
        return $this->processShortcodes;
    }

    /**
     * Set shortcodes to be processed or not
     */
    public function setProcessShortcodes(bool $process): static
    {
        $this->processShortcodes = $process;
        return $this;
    }

    public function getParserName(): ?string
    {
        return $this->parserName;
    }

    public function setParserName(string $parserToUse): self
    {
        $this->parserName = $parserToUse;
        return $this;
    }

    /**
     * Non-string values (e.g. via being used as default_cast) are supported by DBText (the default default_cast), where
     * 0 will be detected as non-string and exists() will return false. However when shortcode parsing is enabled by
     * default a trip through the parser sees 0 turn into '0', and exists() will inaccurately return true. This happens
     * because DBString relies on RAW() by default, where as DBHTMLText does not. We can also work around this by
     * relying on getValue instead of RAW.
     *
     * @see \SilverStripe\ORM\FieldType\DBString
     * @see \SilverStripe\ORM\FieldType\DBHTMLText
     */
    public function exists(): bool
    {
        $value = $this->getValue();
        // All truthy values and non-empty strings exist ('0' but not (int)0)
        return $value || (is_string($value) && strlen($value));
    }

    public function RAW(): ?string
    {
        $value = $this->getValue();
        if (!is_string($value)) {
            return is_string($raw = parent::RAW()) ? $raw : null;
        }
        return $this->processOutput($value) ?? parent::RAW();
    }

    /**
     * Output content only if shortcode processing is enabled.
     */
    protected function processOutput(?string $value): ?string
    {
        return $value && $this->getProcessShortcodes() ? $this->parseShortcodes($value) : null;
    }

    /**
     * Gets either the specified shortcode parser, or the globally active one.
     * No strong return type is defined as Injector is used by ShortcodeParser to return the instance.
     *
     * @return ShortcodeParser
     */
    protected function getParserInstance()
    {
        return $this->parserName ? ShortcodeParser::get($this->parserName) : ShortcodeParser::get_active();
    }

    /**
     * Parse shortcodes, do not evaluate if we should or not.
     */
    protected function parseShortcodes(?string $value): string
    {
        $parser = $this->getParserInstance();
        return $parser->parse($value);
    }
}
