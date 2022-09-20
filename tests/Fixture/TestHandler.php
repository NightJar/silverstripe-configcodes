<?php

namespace Nightjar\ConfigCodes\Test\Fixture;

use Nightjar\ConfigCodes\Handler;

class TestHandler implements Handler
{
    public function __construct(object $object, string $property)
    {
        $this->object = $object;
        $this->property = $property;
    }
    public static function getParameters(): array
    {
        return [];
    }

    public static function getRequiresContent(): bool
    {
        return false;
    }

    public function process(array $arguments = [], ?string $content = null): ?string
    {
        $value = null;
        $object = $this->object;
        $property = $this->property;
        if (property_exists($object, $property)) {
            $value = $object->$property;
        } elseif (method_exists($object, $property)) {
            $value = $object->$property();
        }
        return $value;
    }
}
