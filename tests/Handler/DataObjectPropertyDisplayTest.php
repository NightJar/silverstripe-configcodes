<?php

namespace Nightjar\ConfigCodes\Test\Handler;

use DomainException;
use InvalidArgumentException;
use Nightjar\ConfigCodes\Handler\DataObjectPropertyDisplay;
use Nightjar\ConfigCodes\Test\Fixture\Data\Reference;
use Nightjar\ConfigCodes\Test\Fixture\Negative;
use SilverStripe\Dev\SapphireTest;

class DataObjectPropertyDisplayTest extends SapphireTest
{
    protected static $fixture_file = 'DataObjectPropertyDisplayTest.yml';

    protected static $extra_dataobjects = [
        Reference::class
    ];

    public function testRequiresIdAttribute()
    {
        $properties = DataObjectPropertyDisplay::getParameters();
        $this->assertArrayHasKey('id', $properties);
        $this->assertTrue($properties['id']);
    }

    public function testDoesNotAcceptContent()
    {
        $this->assertNull(DataObjectPropertyDisplay::getRequiresContent());
    }

    public function testSubstitutesCorrectValue()
    {
        $id = $this->idFromFixture(Reference::class, 'one');
        $handler = new DataObjectPropertyDisplay(Reference::class, 'Title');
        $this->assertSame('first', $handler->process(['id' => $id]));
    }

    public function testSubstituteAllowsFormatting()
    {
        $id = $this->idFromFixture(Reference::class, 'two');
        $handler = new DataObjectPropertyDisplay(Reference::class, 'Title', 'UpperCase');
        $this->assertSame('SECOND', $handler->process(['id' => $id]));
    }

    public function testRequiresDataObjectSubclass()
    {
        $this->expectException(InvalidArgumentException::class);
        new DataObjectPropertyDisplay(Negative::class, 'ID');
    }

    public function testThrowsIfPropertyDoesNotExist()
    {
        $this->expectException(DomainException::class);
        $handler = new DataObjectPropertyDisplay(Reference::class, 'ThisDoesNotExist');
        // There are two fixtures, and it doesn't matter which one we fetch. Hard-coded ID of 1 is fine here.
        $handler->process(['id' => 1]);
    }

    public function testDoesNotHaltExecutionIfTheIdDoesNotExist()
    {
        $handler = new DataObjectPropertyDisplay(Reference::class, 'Title');
        // There are only 2 fixtures. This ID should definitely not exist.
        $this->assertNull($handler->process(['id' => 9999]));
    }
}
