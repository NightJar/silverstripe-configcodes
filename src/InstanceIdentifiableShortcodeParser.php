<?php

namespace Nightjar\ConfigCodes;

use SilverStripe\View\Parsers\ShortcodeParser;

/**
 * Default ShortcodeParser can reference different instances, but has no way of listing what is available.
 * This subclass adds the ability to list out the names of instances
 *
 * @method self get_active()
 */
class InstanceIdentifiableShortcodeParser extends ShortcodeParser
{
    /**
     * Caches this instances name identifier
     */
    protected ?string $instanceIdentifier = null;

    /**
     * Get active instance name
     *
     * @see ShortcodeParser::$active_instance
     */
    public static function get_active_identifier(): string
    {
        return ShortcodeParser::$active_instance;
    }

    /**
     * Get this instances name (stored under parent::$instances)
     *
     * Sets the cache variable if it is not already.
     * Assumes that this instance is both registered, and registered under only one name.
     * This instance may be the active one, but because active is only referenced by name we can't tell and must look-up
     */
    public function getInstanceName(): ?string
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
