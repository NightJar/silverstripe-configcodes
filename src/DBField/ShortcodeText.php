<?php

namespace Nightjar\ConfigCodes\DBField;

use Nightjar\ConfigCodes\DBField\ShortcodablePlainString;
use SilverStripe\ORM\FieldType\DBText;

class ShortcodeText extends DBText
{
    use ShortcodablePlain;
}
