<?php

namespace Nightjar\ConfigCodes\DBField;

use SilverStripe\Core\Convert;
use SilverStripe\View\Parsers\ShortcodeParser;

trait ShortcodableDBString
{
    /**
     * Enable shortcode parsing on this field
     *
     * Lacks type hint because it needs to be compatible with DBHTMLText
     *
     * @see self::getProcessShortcodes()
     * @see self::setProcessShortcodes()
     *
     * @var bool
     */
    protected $processShortcodes = false;

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
    public function getProcessShortcodes()
    {
        return $this->processShortcodes;
    }

    /**
     * Set shortcodes to be processed or not
     *
     * @param bool $process
     * @return $this
     */
    public function setProcessShortcodes($process)
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

    public function RAW(): ?string
    {
        return $this->processOutput($this->getValue()) ?? parent::RAW();
    }

    /**
     * Output content only if shortcode processing is enabled.
     *
     * @param string|null $value
     * @return string|null
     */
    protected function processOutput(?string $value): ?string
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

    /**
     * Parse shortcodes, do not evaluate if we should or not.
     *
     * @param string|null $value
     * @return string
     */
    protected function parseShortcodes(?string $value): string
    {
        $parser = $this->getParserInstance();
        return $parser->parse($value);
    }
}
