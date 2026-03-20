<?php

namespace Nightjar\ConfigCodes\FormField;

use Nightjar\ConfigCodes\HandlerBroker;
use Nightjar\ConfigCodes\InstanceIdentifiableShortcodeParser;
use SilverStripe\Core\Extension;

/**
 * @extends Extension<\SilverStripe\Forms\FormField>
 */
class ShortcodableExtension extends Extension
{
    /**
     * Merges with FormField.default_classes
     * @config
     */
    private static array $default_classes = ['extrashortcodes'];

    protected ?string $shortcodeParserName = null;

    public function setShortcodeParser(string $name): mixed
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
    protected function updateAttributes(&$attributes)
    {
        $conf = $this->loadShortcodeConfiguration();
        $encodedConf = json_encode($conf);
        if ($conf && $encodedConf) {
            $attributes['data-shortcodes'] = $encodedConf;
        }
        return $attributes;
    }

    /**
     * @return array<string, array{parameters:array<string,bool>, content:bool|null}>
     */
    public function loadShortcodeConfiguration(): array
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
