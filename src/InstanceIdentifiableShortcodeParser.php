<?php

namespace Nightjar\ConfigCodes;

use SilverStripe\View\Parsers\ShortcodeParser;

class InstanceIdentifiableShortcodeParser extends ShortcodeParser
{
    /**
     * Caches the instance name
     *
     * @var string|null
     */
    protected $instanceIdentifier = null;

    /**
     * @see ShortcodeParser::$active_instance
     *
     * @return string
     */
    public static function get_active_identifier()
    {
        return ShortcodeParser::$active_instance;
    }

    /**
     * Get this instances name (stored under parent::$instances)
     *
     * Sets the cache variable if it is not already.
     * Assumes that a single instance is registered under only one name.
     *
     * @return string
     */
    public function getInstanceName()
    {
        if (!isset($this->instanceIdentifier)) {
            foreach (ShortcodeParser::$instances as $name => $instance) {
                // PHP compares objects by == as "value equivalence", but === as "the same object reference"
                if ($instance === $this) {
                    $this->instanceIdentifier = $name;
                }
            }
        }
        return $this->instanceIdentifier;
    }
}
