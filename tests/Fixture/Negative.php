<?php

namespace Nightjar\ConfigCodes\Test\Fixture;

use SilverStripe\Dev\TestOnly;
use SilverStripe\Model\ModelData;

class Negative extends ModelData implements TestOnly
{
    public string $possible = '<strong>Might</strong> do...';

    public function deny(): string
    {
        return 'Nope';
    }
}
