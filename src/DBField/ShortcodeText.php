<?php

namespace Nightjar\ConfigCodes\DBField;

use SilverStripe\ORM\FieldType\DBText;

class ShortcodeText extends DBText
{
    use ShortcodablePlain;
}
