import React, { useState, useMemo } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import { toStorableString, toSlateNodeTree } from 'lib/shortcodeSerialiser';
import Toolbar from 'components/Toolbar';
import Element from 'components/Element';
import hotKeys, { cloneKeyboardEvent } from 'lib/keyboard';
import withShortcodes from 'lib/withShortcodes';
import { InputGroup, InputGroupAddon } from 'reactstrap'; // eslint-disable-line import/no-extraneous-dependencies
import { ShortcodeConfig } from '../lib/hookShortcodes';
import { HotKeyRegistrar } from '../lib/hookHotkeys';

const makeLabelsFocusEditor = (input, targetId) => {
  input.labels.forEach((label) => label.addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById(targetId).focus();
  }));
};

export const RichInput = ({ linkedInput, shortcodeConfig }) => {
  const [editor] = useState(() => withReact(withHistory(withShortcodes(createEditor()))));
  // Unmentioned constraints on the slate document tree (via documentation) as at 2022-10-21:
  // - Editor node MUST have Element children only.
  //   It does not appear to be able to directly hold Text nodes - severe usability issues occur on attempting to edit
  // - All Element nodes MUST have a leaf node (Text) children, even if they're empty.
  // It may be to do with e.g. withHistory, but I've not looked too hard. Trial & error has discovered the above.
  // This is why the node tree output is wrapped in an Element interface here.
  // Without this, errors are silent and content simply disappears when attempting to type (in whole or part).
  const initialValue = useMemo(() => [{ children: toSlateNodeTree(linkedInput.value, shortcodeConfig) }], []);
  const storeValueForSubmit = (updatedContent) => editor.isContentChanging() && linkedInput.setRangeText(
    toStorableString(updatedContent, shortcodeConfig), 0, linkedInput.value.length
  );
  const editableElementId = `shortcodable-${linkedInput.id}`;
  makeLabelsFocusEditor(linkedInput, editableElementId);
  const readOnly = (linkedInput.disabled || linkedInput.readOnly) || undefined;
  const isMultiline = linkedInput.type === 'textarea';
  const { registerHotKey, handleHotKey } = hotKeys();
  const keyHandler = isMultiline ? handleHotKey : (event) => {
    if (event.key.toLowerCase() === 'enter') {
      // Trigger any handlers on the original input
      // if the event did not get preventDefault called on it (dispatchEvent returns false if preventDefault is called)
      // trigger an implicit submission just as a regular input[type=text]
      // ideally this could happen via HTMLFormElement.requestSubmit() - but it doesn't seem to work in the CMS :(
      // so manually try to locate the "default button" and trigger a click on it.
      // https://www.w3.org/TR/2014/REC-html5-20141028/forms.html#implicit-submission
      // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#implicit-submission
      if (linkedInput.dispatchEvent(cloneKeyboardEvent(event.nativeEvent))) {
        // click() will do nothing if the element is disabled - and CMS entwine will block it anyway if that wasn't true
        linkedInput.form.querySelector('input[type=submit],button[type=submit],input[type=image]').click();
      }
      // never break to a new line.
      event.preventDefault();
    }
    handleHotKey(event);
  };
  const block = 'shortcodable-input';
  const classes = ['disabled', 'readOnly']
    .filter((state) => linkedInput[state])
    .reduce((classnames, modifier) => `${classnames} ${block}--${modifier}`, block);
  return (
    <Slate editor={editor} value={initialValue} onChange={storeValueForSubmit}>
      <InputGroup>
        <Editable
          id={editableElementId}
          aria-labelledby={linkedInput.labels[0].id}
          tabIndex="0"
          className={`form-control ${classes}`}
          readOnly={readOnly}
          aria-multiline={(!readOnly && isMultiline) || undefined}
          aria-disabled={linkedInput.disabled || undefined}
          aria-readonly={linkedInput.readonly || undefined}
          onKeyDown={keyHandler}
          renderElement={Element}
        />
        <InputGroupAddon addonType="append">
          <ShortcodeConfig.Provider value={shortcodeConfig}>
            <HotKeyRegistrar.Provider value={registerHotKey}>
              <Toolbar blockId={editableElementId} />
            </HotKeyRegistrar.Provider>
          </ShortcodeConfig.Provider>
        </InputGroupAddon>
      </InputGroup>
    </Slate>
  );
};
