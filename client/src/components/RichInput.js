/* global document */
import React, { useState, useMemo, useCallback } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import { toStorableString, toSlateNodeTree } from 'lib/shortcodeSerialiser';
import { RichInputMenu } from 'components/InputMenu';
import Element from 'components/Element';
import detectHotKey from 'lib/hotkey';
import withShortcodes from 'lib/withShortcodes';

const makeLabelsFocusEditor = (input, targetId) => {
  input.labels.forEach((label) => label.addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById(targetId).focus();
  }));
};

export default ({ linkedInput, validCodes }) => {
  const [editor] = useState(() => withReact(withHistory(withShortcodes(createEditor()))));
  // Unmentioned constraints on the slate document tree (via documentation) as at 2022-10-21:
  // - Editor node MUST have Element children only.
  //   It does not appear to be able to directly hold Text nodes - all text will be deleted on attempting to edit if so.
  // - All Element nodes MUST have a leaf node (Text) children, even if they're empty.
  const slateDocument = linkedInput.value ? toSlateNodeTree(linkedInput.value, validCodes) : [{ text: '' }];
  const initialValue = useMemo(() => [{ children:  slateDocument }]);
  const storeValueForSubmit = (updatedContent) => editor.isContentChanging() && linkedInput.setRangeText(
    toStorableString(updatedContent, validCodes), 0, linkedInput.value.length
  );
  const editableElementId = `shortcodable-${linkedInput.id}`;
  makeLabelsFocusEditor(linkedInput, editableElementId);
  const readOnly = (linkedInput.disabled || linkedInput.readOnly) || undefined;
  const isMultiline = linkedInput.type === 'textarea';
  const block = 'shortcodable-input';
  const classes = ['disabled', 'readOnly']
    .filter((state) => linkedInput[state])
    .reduce((classnames, modifier) => `${classnames} ${block}--${modifier}`, block);
  return (
    <Slate editor={editor} value={initialValue} onChange={storeValueForSubmit}>
      <RichInputMenu title="shortcodes" />
      <Editable
        id={editableElementId}
        aria-labelledby={linkedInput.labels[0].id}
        tabIndex="0"
        className={`form-control ${classes}`}
        readOnly={readOnly}
        aria-multiline={(!readOnly && isMultiline) || undefined}
        aria-disabled={linkedInput.disabled || undefined}
        aria-readonly={linkedInput.readonly || undefined}
        onKeyDown={detectHotKey(editor)}
        renderElement={useCallback(Element)}
      />
    </Slate>
  );
};
