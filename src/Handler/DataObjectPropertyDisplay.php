<?php

namespace Nightjar\ConfigCodes\Handler;

use DomainException;
use InvalidArgumentException;
use Nightjar\ConfigCodes\Handler;
use SilverStripe\ORM\DataObject;

class DataObjectPropertyDisplay implements Handler
{
    protected string $className;

    protected string $property;

    protected ?string $format;

    public function __construct(string $className, string $property, ?string $format = null)
    {
        if (!is_subclass_of($className, DataObject::class)) {
            throw new InvalidArgumentException("Class '$className' is not a DataObject subclass");
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

    public static function getRequiresContent(): ?bool
    {
        return null;
    }

    public function process(array $arguments = [], ?string $content = null): ?string
    {
        $className = $this->className;
        $property = $this->property;
        $format = $this->format;

        $instance = ($className)::get()->byId($arguments['id']);

        // Do not stop a page from loading with an emergency error if e.g. someone deletes data before updating codes.
        if (!$instance) {
            return null;
        }

        // Error instead of letting ViewableData::obj() cast `null` into `DBText` and silently giving no output
        // This is safe because it is a configuration (development) issue, not a content management issue as above.
        if (!$instance->hasField($property) && !$instance->hasMethod($property)) {
            throw new DomainException("$property does not exist on $className");
        }

        $value = $instance->obj($property);

        if ($format && $value->hasMethod($format)) {
            return $value->$format();
        }

        return $value;
    }
}
