<?php

namespace NZTA\ConfigCodes\DBField;

use NZTA\ConfigCodes\DBField\ShortcodableDBString;
use SilverStripe\Core\Convert;
use SilverStripe\ORM\FieldType\DBVarchar;
use SilverStripe\View\Requirements;

class ShortcodeVarchar extends DBVarchar
{
    use ShortcodableDBString;

    /**
     * Return output for display in templates.
     *
     * Standard Varchar (as opposed to HTMLVarchar) should have HTML escaped for display. However shortcodes may
     * introduce HTML that is 'safe' by manner of being code defined & not user input. This is not always true with
     * regards to e.g. attribute values being supplied for HTML if the handler allows it, but care must be taken by the
     * handler's developer to not compromise security in their use cases.
     *
     * @return string
     */
    public function forTemplate(): string
    {
        Requirements::javascript('nightjar/silverstripe-configcodes:client/dist/js/bundle.js');
        // shortcodes are not valid XML so should not be affected/escaped
        $htmlSafeValue = Convert::raw2xml($this->getValue());
        return $this->processShortcodes($htmlSafeValue) ?? $htmlSafeValue;
    }

    /**
     * Force parseing of shortcodes, regardless of whether it is enabled or not.
     * Essentally the opposite of {@see Plain()}
     *
     * @return string
     */
    public function Parsed(): string
    {
        // shortcodes are not valid XML so should not be affected/escaped
        $htmlSafeValue = Convert::raw2xml($this->getValue());
        return $this->parseShortcodes($htmlSafeValue);
    }
}
