<?php

namespace Nightjar\ConfigCodes\Test\DBField;

use Nightjar\ConfigCodes\DBField\ShortcodeHTMLVarchar;
use SilverStripe\Dev\SapphireTest;
use SilverStripe\ORM\FieldType\DBHTMLVarchar;

class ShortcodeHTMLVarcharTest extends SapphireTest
{
    use CommonFunctions;

    public function testPlainPreservesVerticalSpacing()
    {
        $shortcoded = new ShortcodeHTMLVarchar();
        $standard = new DBHTMLVarchar();
        $shortcoded->setValue('<strong>[html] of an example</strong>');
        $standard->setValue('<strong>[html] of an example</strong>');

        $this->assertSame($standard->CDATA(), $shortcoded->CDATA(), 'Unprocessed plain output should match');

        $shortcoded->setProcessShortcodes(true);
        $standard->setProcessShortcodes(true);

        $this->assertSame($standard->CDATA(), $shortcoded->CDATA(), 'Shortcode processed plain output should match');
    }
}
