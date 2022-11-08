<?php

namespace NZTA\ConfigCodes\FormField;

use NZTA\ConfigCodes\HandlerBroker;
use NZTA\ConfigCodes\InstanceIdentifiableShortcodeParser;
use SilverStripe\Core\Extension;

class ShortcodableExtension extends Extension
{
    private static $default_classes = ['extrashortcodes'];

    protected $shortcodeConfiguration = [];

    public function setShortcodeConfiguration($config)
    {
        $this->shortcodeConfiguration = $config ?? [];
        return $this->owner;
    }

    public function getShortcodeConfiguration()
    {
        return $this->shortcodeConfiguration;
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
            InstanceIdentifiableShortcodeParser::get_active_identifier()
        );
        $configuration = [];
        foreach ($codes as $shortcode) {
            $handler = $registry->getHandlerForCode($shortcode);
            $configuration[$shortcode] = [
                'parameters' => $handler->getParameters(),
                'content' => $handler->getRequiresContent(),
            ];
        }

        $this->owner->extend('updateFormFieldConfiguration', $configuration);

        return $configuration;
    }
}
