<?php

namespace Nightjar\ConfigCodes\Test\Fixture;

use SilverStripe\Dev\TestOnly;
use SilverStripe\View\ViewableData;

class Negative extends ViewableData implements TestOnly
{
    public $possible = '<strong>Might</strong> do...';

    public function deny()
    {
        return 'Nope';
    }
}
