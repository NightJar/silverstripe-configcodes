<?php

namespace Nightjar\ConfigCodes\Test\Fixture\Data;

use SilverStripe\Dev\TestOnly;
use SilverStripe\ORM\DataObject;

class Reference extends DataObject implements TestOnly
{
    private static $db = [
        'Title' => 'Varchar',
    ];
}
