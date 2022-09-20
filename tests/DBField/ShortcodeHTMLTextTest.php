<?php

namespace Nightjar\ConfigCodes\Test\DBField;

use Nightjar\ConfigCodes\DBField\ShortcodeHTMLText;
use SilverStripe\Dev\SapphireTest;
use SilverStripe\ORM\FieldType\DBHTMLText;

class ShortcodeHTMLTextTest extends SapphireTest
{
    use CommonFunctions;

    public function testPlainPreservesVerticalSpacing()
    {
        $shortcoded = new ShortcodeHTMLText();
        $standard = new DBHTMLText();
        $shortcoded->setValue('<p>[html]<br />Of an example</p>');
        $standard->setValue('<p>[html]<br />Of an example</p>');

        $this->assertSame($standard->Plain(), $shortcoded->Plain(), 'Unprocessed plain output should match');

        $shortcoded->setProcessShortcodes(true);
        $standard->setProcessShortcodes(true);

        $this->assertSame($standard->Plain(), $shortcoded->Plain(), 'Shortcode processed plain output should match');
    }
}
