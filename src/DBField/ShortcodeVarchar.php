<?php

namespace NZTA\ConfigCodes\DBField;

use NZTA\ConfigCodes\DBField\ShortcodableDBString;
use SilverStripe\Core\Convert;
use SilverStripe\ORM\FieldType\DBVarchar;
use SilverStripe\View\Requirements;

class ShortcodeVarchar extends DBVarchar
{
    use ShortcodableDBString;

    private static $default_full_output = false;

    /**
     * Return output for display in templates.
     *
     * Standard Varchar behaviour is to escape HTML, and could be used in places such as the HTML <Title> tag.
     * Due to this allowing HTML to be introduced by a shortcode is an unreasonable change from default behaviour, so we
     * will remove the HTML by default - but only where it has originated from Shortcodes, as user entered code will
     * already be escaped.
     *
     * @see self::Full()
     *
     * @return string
     */
    public function forTemplate(): string
    {
        return self::config()->default_full_output ? $this->Full() : $this->Plain();
    }

    /**
     * Return output for display including HTML introduced by Shortcodes
     *
     * Standard Varchar (as opposed to HTMLVarchar) should have HTML escaped for display. However shortcodes may
     * introduce HTML that is 'safe' by manner of being code defined & not user input. This is not always true with
     * regards to e.g. attribute values being supplied for HTML if the handler allows it, but care must be taken by the
     * handler's developer to not compromise security in their use cases.
     *
     * @return string
     */
    public function Full(): string
    {
        // shortcodes are not valid XML so should not be affected/escaped
        $htmlSafeValue = Convert::raw2xml($this->getValue());
        return $this->processShortcodes($htmlSafeValue) ?? $htmlSafeValue;
    }

    /**
     * Return output for display but with HTML introduced by Shortcodes stripped
     *
     * Standard Varchar (as opposed to HTMLVarchar) should have HTML escaped for display. However shortcodes may
     * introduce HTML that is 'safe' by manner of being code defined & not user input. But as Varchar is not always used
     * in HTML contexts, we can strip it out again.
     *
     * @return string
     */
    public function Plain(): string
    {
        return trim(strip_tags($this->Full()));
    }

    /**
     * Parse shortcodes & give full output, regardless of whether processing is enabled or not.
     *
     * @return string
     */
    public function Parsed(): string
    {
        // shortcodes are not valid XML so should not be affected/escaped
        $htmlSafeValue = Convert::raw2xml($this->getValue());
        return $this->parseShortcodes($htmlSafeValue);
    }

    public function Clean(): string
    {
        return $this->Plain();
    }
}
