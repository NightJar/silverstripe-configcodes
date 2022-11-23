Allow text fields to hold and process short codes.

## todo
[x] Make 'plain' the default output (`forTemplate`)
[x] make shortcode unable to be applied within or over a shortcode - https://docs.silverstripe.org/en/4/developer_guides/extending/shortcodes/#limitations
[ ] serverside validation there are no nested shortcodes?
[x] make single line edit only (for input type text).
[x] make enter key submit like would happen with an `input[type=text]` field
[x] hot key
[x] focus indicator
[x] recieve focus from label activation
[x] tool tip on how to use
[x] interface for setting shortcode options (i.e. attributes)
[x] pass config through from data attribute
[x] un-hardcode `[maori]` shortcode
[x] Disabled state visual style
[ ] javascript tests
[ ] JS Injector override input element (how to save then though? no hidden `input` element to write into)
[x] Make shortcodes apply to rich editor
[x] Make content adjustments apply from editor to Slate
[ ] FIX: Tip doesn't do what it does in a React context - it won't close without re-clicking the button that opens it.
[ ] Figure out how aria-describedBy can reference the popover visual help - can't happen with Tip because it doesn't render the content by default.
[ ] How is the accessibility on the toolbar? Does it matter, if we hint on shortcut keys elsewhere? All functionality is available via the Editor - so as long as that opens with a tooltip it should be OK, right?
[x] support translations
[ ] shortcodes that do not accept content should probably be 'void' elements (Slate)
[ ] demarcate invalid editor fields
