<?php

namespace Nightjar\ConfigCodes\DBField;

use Nightjar\ConfigCodes\DBField\ShortcodablePlainString;
use SilverStripe\ORM\FieldType\DBVarchar;

class ShortcodeVarchar extends DBVarchar
{
    use ShortcodablePlain;
}
