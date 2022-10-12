<?php

namespace NZTA\ConfigCodes\DBField;

use SilverStripe\Core\Convert;
use SilverStripe\View\Parsers\ShortcodeParser;

trait ShortcodableDBString
{

    /**
     * Enable shortcode parsing on this field
     *
     * @var bool
     */
    protected bool $processShortcodes = false;

    /**
     * The name of the shortcode parser to use.
     *
     * If unset (null) it will use the current active instance.
     * @see ShortcodeParser::get_active
     *
     * @var string|null
     */
    protected ?string $parserName = null;

    /**
     * Check if shortcodes are enabled
     *
     * @return bool
     */
    public function getProcessShortcodes(): bool
    {
        return $this->processShortcodes;
    }

    /**
     * Set shortcodes on or off by default
     *
     * @param bool $process
     * @return $this
     */
    public function setProcessShortcodes(bool $process): self
    {
        $this->processShortcodes = $process;
        return $this;
    }

    public function getParserName(): string
    {
        return $this->parserName;
    }

    public function setParserName(string $parserToUse): self
    {
        $this->parserName = $parserToUse;
        return $this;
    }

    public function RAW(): ?string
    {
        return $this->processShortcodes($this->getValue()) ?? parent::RAW();
    }

    protected function processShortcodes(?string $value): ?string
    {
        if (!is_null($value) && $this->getProcessShortcodes()) {
            return $this->parseShortcodes($value);
        }
        return null;
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

    protected function parseShortcodes(?string $value): string
    {
        $parser = $this->getParserInstance();
        return $parser->parse($value);
    }

    /**
     * Remove any HTML that exists either in the field's value or introduced by shortcodes
     *
     * @return string|null
     */
    // public function Plain(): string
    // {
    //     $text = strip_tags($this->RAW());
    //     return trim(Convert::xml2raw($text));
    // }
}
