<?php

namespace NZTA\ConfigCodes\Test\Handler;

use DomainException;
use InvalidArgumentException;
use NZTA\ConfigCodes\Handler\DataObjectPropertyDisplay;
use NZTA\ConfigCodes\Test\Fixture\Data\Reference;
use NZTA\ConfigCodes\Test\Fixture\Negative;
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
        $handler->process(['id' => 1]);
    }
}
