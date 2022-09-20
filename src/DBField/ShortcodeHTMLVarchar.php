<?php

namespace Nightjar\ConfigCodes\DBField;

use SilverStripe\ORM\FieldType\DBHTMLVarchar;

class ShortcodeHTMLVarchar extends DBHTMLVarchar
{
    use ShortcodableHTML;
}
