# ConfigCodes

Allow text fields to hold and process short codes, and for shortcodes to be defined via config.

## Usage

### Defining shortcodes

There are two parts to defining a shortcode out of the box: handlers, and config.

Handlers must implement the new `Nightjar\ConfigCodes\Handler` interface, which defines what attributes are available or
required, whether or not the shortcode accepts or requires content, and of course processes a code to supply substitute
output.

```php
interface Handler {
    public static function getParameters(): array; // Attribute name => is required (bool)
    public static function getRequiresContent(): ?bool;
    public function process(array $arguments = [], ?string $content = null): ?string;
}
```

Configuration happens in combination with Injector config to deifne a use case for the handler. The default setup is to
reference `Nightjar\ConfigCodes\Registry\ConfigReader.shortcodes`, under which handlers are listed by name, each of which in
turn list key-value pairs of code (key) to Injector bean name (value).

With a hypothetical language change handler for a site where the main language is `<html lang="en">` but there are other
official languages the site might use for phrases in content that need to be wrapped in `<span lang="??">...</span>`,
we could use the below configuration in content: `[mi]Kia ora[/mi], welcome to my site` (It's just an example, leaving arguments about adopted or borrowed words aside e.g. cafe in English _was_ a French word, but is English _too_ now).

```yml
SilverStripe\Core\Injector\Injector:
  Shortcodes.TeReoMaori:
    class: My\App\LanguageChangeHandler
    constructor: [mi]
  Shortcodes.Cymraeg:
    class: My\App\LanguageChangeHandler
    constructor: [cy]
Nightjar\ConfigCodes\Registry\ConfigReader:
  shortcodes:
    default:
      mi: Shortcodes.TeReoMaori
      cy: Shortcodes.Cymraeg
```

A handler that fetches fields from a DataObject class, where the ID attribute is required, comes 'out of the box' with
this module, and can be used repeatedly for different codes without having to deifne a new handler in PHP for each case:

```yml
SilverStripe\Core\Injector\Injector:
  Shortcodes.Member:
    class: Nightjar\ConfigCodes\Handler\DataObjectPropertyDisplay
    constructor: [SilverStripe\Security\Member, Surname, UpperCase]
  Shortcodes.Page:
    class: Nightjar\ConfigCodes\Handler\DataObjectPropertyDisplay
    constructor: [Page, Title]

Nightjar\ConfigCodes\Registry\ConfigReader:
  shortcodes:
    default:
      member: Shortcodes.Member
      page: Shortcodes.Page
```

This can then be used in HTMLText fields; E.g `Direct all complaints to: [member id=1]` which might output in dev
`Direct all complaints to: ADMIN` when using the [SS_DEFAULT_ADMIN_USERNAME & SS_DEFAULT_ADMIN_PASSWORD](https://docs.silverstripe.org/en/4/getting_started/environment_management/#core-environment-variables) environment variables,
which creates the member FirstName: Default, Surname: Admin (at ID 1 if there are no other members, of course).

### DB Field types

Injector definitions have been loaded for each string field type.

- Varchar -> ShortcodeVarchar
- Text -> ShortcodeText
- HTMLVarchar -> ShortcodeHTMLVarchar
- HTMLText -> ShortcodeHTMLText

For eacy type, a plain version that does not process shortcodes - e.g `ShortcodeVarchar`, and a "Parsed" sub-config that
parses shortcodes - e.g `ShortcodeVarchar.Parse`

The HTML string field variants add little over the framework supplied classes, and exist mainly give a consistent API
with the non-HTML variants.

The replacements can be used either directly for specific application:

```php
    private static $db => [
        'Description' => 'ShortcodeVarchar.Parse',
    ];
```

Or by applying globally to every field for site-wide application:

```yml
SilverStripe\Core\Injector\Injector:
  Varchar: '%$ShortcodeVarchar.Parse'
  HTMLVarchar: '%$ShortcodeHTMLVarchar.Parse'
  Text: '%$ShortcodeText.Parse'
  HTMLText: '%$ShortcodeHTMLText.Parse'
```

With both options it is important to note limitations in **Using escaping functions** below.

With global application for `Text` it is important to read **Setting the default cast** below.

## Using escaping functions

The default for Silverstripe CMS is to escape HTML. The way this is done also by default escapes double quote (`"`) and
single quote (`'`). This generally makes the output safe for inclusion into tag attributes, rather than text nodes.

However, the Silverstripe frameworks ShortcodeParser uses DOMDocument (via a wrapper or two) to parse shortcodes, to
ensure they aren't being abused to form tag names, etc. which is [explicitly disallowed](https://docs.silverstripe.org/en/4/developer_guides/extending/shortcodes/#attribute-and-element-scope).

PHPs `DOMDocument` does not respect input formatting on output. Loading `&quot;` into the system will save out as `"`
due to the encoding being deemed "unnecessary" as per the HTML spec, due to our input string being loaded as a text
node. However for us **this poses a problem if the input might be targetted for output in an attribute**, where an
unencoded `"` _will_ pose a problem. To work around this we can either use the `HTMLATTR` escape method, or avoid
shortoode parsing if applicable via `$Value` in the template (`getValue()` in PHP). `HTMLATTR` will also escape
shortcode output, as it is called/applied after parsing. `$Value.XML` will escape output without parsing shortcodes, if
the default cast is set as below (next heading).

This issue is commonly run into when outputting JSON encoded data into a data attribute.

## Setting the default cast

Output of non-string types (`FormField::getSchemaData()`) will cause errors due typehints on the new `ShortcodeText`
field. We can specify the default `default_cast` in order to remedy this. If your project already changes the default
cast this may not be necessary, or you might need to adapt it accordingly.

```yml
SilverStripe\View\ViewableData:
  default_cast: SilverStripe\ORM\FieldType\DBText
```

This means that returing non-object strings will not process shortcodes though. If you want a return a string that
contains some which needs processing, then the method should return a new VarcharText with the return value set to it,
instead of a primitive string.

```diff
- return "a plain string with a [code] in it"; // Template will not process the shortcode
+ $output = new ShortcodeText();
+ $output->setValue("a plain string with a [code] in it");
+ $output->setProcessShortcodes(true);
+ return $output; // Template will render the shortcode substitution.
```

Alternatively this could be done via the [`casting` config](https://docs.silverstripe.org/en/4/developer_guides/model/data_types_and_casting/).
See `SilverStripe\View\ViewableData::$casting`
or good examples in `SilverStripe\Forms\FormField::$casting`

## Todo

There is a UI in development for the CMS to improve the shortcode usage experience beyond having to manually remember
all the valid shortcodes, valid attributes & attribute types for each, and typing these in by hand for each usage.

Accessibility and minor use case improvements remain unfinished.
The field currently only works for `input[type=text]` form fields, but should be easy to extend to `textarea` also.
A plugin for TinyMCE is planned in order to offer the same functionality there for consistency.

The UI can be trialled via the config:

```yml
SilverStripe\Forms\TextField:
  extensions:
    - Nightjar\ConfigCodes\FormField\ShortcodableExtension
```

- [x] Make 'plain' the default output (`forTemplate`)
- [x] make shortcode unable to be applied within or over a shortcode - https://docs.silverstripe.org/en/4/developer_guides/extending/shortcodes/#limitations
- [ ] serverside validation there are no nested shortcodes?
- [x] make single line edit only (for input type text).
- [x] make enter key submit like would happen with an `input[type=text]` field
- [x] hot key
- [x] focus indicator
- [x] recieve focus from label activation
- [x] tool tip on how to use
- [x] interface for setting shortcode options (i.e. attributes)
- [x] pass config through from data attribute
- [x] un-hardcode test shortcode
- [x] Disabled state visual style
- [ ] javascript tests
- [ ] JS Injector override input element (how to save then though? no hidden `input` element to write into)
- [x] Make shortcodes apply to rich editor
- [x] Make content adjustments apply from editor to Slate
- [ ] FIX: Tip doesn't do what it does in a React context - it won't close without re-clicking the button that opens it.
- [ ] Figure out how aria-describedBy can reference the popover visual help - can't happen with Tip because it doesn't render the content by default.
- [ ] How is the accessibility on the toolbar? Does it matter, if we hint on shortcut keys elsewhere? All functionality is available via the Editor - so as long as that opens with a tooltip it should be OK, right?
- [x] support translations
- [x] shortcodes that do not accept content should probably be 'void' elements (Slate)
- [x] demarcate invalid editor fields
- [x] ViewableData::obj() will cast a value that doesn't exist into a full value object and make it "truthy". Check in DataObjectPropertyDisplay::__construct that things exist as we expect.
- [ ] Remove shortcode if it is empty and press backspace or delete
- [x] Remove button should work on void type shortcodes
- [ ] Leave focus on void type shortcode if cancelling or editing
