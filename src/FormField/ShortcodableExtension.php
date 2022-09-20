<?php

namespace Nightjar\ConfigCodes\FormField;

use Nightjar\ConfigCodes\HandlerBroker;
use Nightjar\ConfigCodes\InstanceIdentifiableShortcodeParser;
use SilverStripe\Core\Extension;

class ShortcodableExtension extends Extension
{
    private static $default_classes = ['extrashortcodes'];

    protected $shortcodeParserName = null;

    public function setShortcodeParser(string $name)
    {
        $this->shortcodeParserName = $name;
        return $this->owner;
    }

    public function getShortcodeParser(): ?string
    {
        return $this->shortcodeParserName;
    }

    /**
     * Updates HTML attribute configuration.
     *
     * @param string[] $attributes key value list that will become key="value" on render
     * @return string[]
     */
    public function updateAttributes(&$attributes)
    {
        $conf = $this->loadShortcodeConfiguration();
        if ($conf) {
            $attributes['data-shortcodes'] = json_encode($conf);
        }
        return $attributes;
    }

    public function loadShortcodeConfiguration()
    {
        $registry = HandlerBroker::get_registry();
        $codes = $registry->getCodesForParser(
            $this->getShortcodeParser() ?? InstanceIdentifiableShortcodeParser::get_active_identifier()
        );
        $configuration = [];
        foreach ($codes as $shortcode) {
            $handler = $registry->getHandlerForCode($shortcode);
            $configuration[$shortcode] = [
                'parameters' => $handler->getParameters(),
                'content' => $handler->getRequiresContent(),
            ];
        }

        $this->owner->extend('updateShortcodeConfiguration', $configuration);

        return $configuration;
    }
}
