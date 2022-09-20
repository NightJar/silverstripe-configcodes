<?php

namespace Nightjar\ConfigCodes\DBField;

use SilverStripe\Core\Convert;

trait ShortcodablePlain
{
    use ShortcodableDBString;

    /**
     * Whether or not to strip HTML provided by shortcodes in the output
     * E.g. Glossary - <span lang="mi">Kia ora</span> showing in a <title> tag would not be ideal.
     * If this config is set to false, the example will instead output as "Glossary - Kia ora"
     *
     * This only affects default output, e.g. $Title in a template. No matter the setting configured, it can be
     * overridden in templates via $Title.Full (include HTML) or $Title.Plain
     *
     * @var boolean
     */
    private static $default_full_output = false;

    /**
     * Return output for display in templates.
     *
     * {@see SilverStripe\ORM\FieldTypes\DBField::forTemplate()} calls {@see SilverStripe\ORM\FieldTypes\DBField::XML()}
     * to output here, escaping HTML characters that would otherwise be output by {@see self::RAW()}. Because we might
     * be introducing HTML via shortcodes we cannot copy this behaviour directly, but we should make allowance for it if
     * we are not processing shortcodes. This is done by the delegate functions, rather than here.
     *
     * @see self::Full()
     * @see self::Plain()
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
     * The escaping is normally carried out via an implicit casting to 'Text' (SilverStripe\ORM\FieldTypes\DBText by
     * default, which does the escaping on render via SilverStripe\ORM\FieldTypes\DBField::forTemplate()), but because
     * once we've processed shortocdes we've got no way to tell what should be escaped and what shouldn't, we must carry
     * out the escaping here directly, before processing shortcodes.
     *
     * @return string
     */
    public function Full(): string
    {
        // shortcodes are not valid XML so should not be affected/escaped
        $htmlSafeValue = Convert::raw2xml($this->getValue());
        return $this->processOutput($htmlSafeValue) ?? $htmlSafeValue;
    }

    /**
     * Return output for display but with HTML introduced by Shortcodes stripped
     *
     * Standard Varchar (as opposed to HTMLVarchar) should have HTML escaped for display. However shortcodes may
     * introduce HTML that is 'safe' by manner of being code defined & not user input. But as Varchar is not always used
     * in HTML contexts, we can strip it out again.
     *
     * @see self::Full() Escapes user inputted HTML before we strip shortcode introduced HTML here.
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
}
