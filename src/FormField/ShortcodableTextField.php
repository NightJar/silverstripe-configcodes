<?php

namespace NZTA\ConfigCodes\FormField;

use SilverStripe\Forms\TextField;

class ShortcodableTextField extends TextField
{
    public function extraClass()
    {
        $this->addExtraClass('extrashortcodes');
        return parent::extraClass();
    }

    public function Type()
    {
        return 'text';
    }
}
