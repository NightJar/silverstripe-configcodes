<?php

namespace Nightjar\ConfigCodes\DBField;

/**
 * Although DBHTMLText and DBHTMLVarchar already implement most of the interface provided by this module, it is nice to
 * keep a consistent API between similar functionality - and the core classes have neither Full() nor forced Parsed()
 * output
 */
trait ShortcodableHTML
{
    use ShortcodableDBString;

    /**
     * Return output for display including content introduced by Shortcodes
     *
     * @see self::RAW()
     */
    public function Full(): string
    {
        $raw = $this->RAW();
        return is_string($raw) ? $raw : '';
    }

    /**
     * Parse shortcodes & give full output, regardless of whether processing is enabled or not.
     */
    public function Parsed(): string
    {
        $value = $this->getValue();
        if (!is_string($value)) {
            // See ShortcodablePlain::Full() for why scalar non-strings need handling
            return is_scalar($value) ? (string) $value : '';
        }
        return $this->parseShortcodes($value);
    }
}
