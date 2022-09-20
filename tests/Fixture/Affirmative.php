<?php

namespace NZTA\ConfigCodes\Test\Fixture;

use SilverStripe\Dev\TestOnly;

class Affirmative implements TestOnly
{
    public function substituteText()
    {
        return 'Yep.';
    }
}
