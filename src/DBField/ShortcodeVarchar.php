<?php

namespace Nightjar\ConfigCodes\DBField;

use SilverStripe\ORM\FieldType\DBVarchar;

class ShortcodeVarchar extends DBVarchar
{
    use ShortcodablePlain;
}
