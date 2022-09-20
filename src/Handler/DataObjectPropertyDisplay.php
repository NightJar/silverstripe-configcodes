<?php

namespace NZTA\ConfigCodes\Handler;

use InvalidArgumentException;
use NZTA\ConfigCodes\Handler;
use SilverStripe\ORM\DataObject;

class DataObjectPropertyDisplay implements Handler
{
    protected string $className;

    protected string $property;

    protected ?string $format;

    public function __construct(string $className, string $property, ?string $format = null)
    {
        if (!is_subclass_of($className, DataObject::class)) {
            throw new InvalidArgumentException('Class name must be a DataObject subclass');
        }
        $this->className = $className;
        $this->property = $property;
        $this->format = $format;
    }

    public static function getParameters(): array
    {
        return [
            'id' => true,
        ];
    }

    public static function getRequiresContent(): bool
    {
        return false;
    }

    public function process(array $arguments = [], ?string $content = null): ?string
    {
        $value = ($this->className)::get()->byId($arguments['id'])->obj($this->property);
        $format = $this->format;
        if ($format && $value->hasMethod($format)) {
            return $value->$format();
        }
        return $value;
    }
}
