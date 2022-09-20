<?php

namespace Nightjar\ConfigCodes\DBField;

use SilverStripe\ORM\FieldType\DBHTMLText;

class ShortcodeHTMLText extends DBHTMLText
{
    use ShortcodableHTML;
}
