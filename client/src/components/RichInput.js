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

const makeLabelsFocusEditor = (input, editableElement) => {
  input.labels.forEach((label) => label.addEventListener('click', (event) => {
    event.preventDefault();
    editableElement.focus();
  }));
};

const contentChanged = (editor) => editor.operations.some((op) => op.type !== 'set_selection');

export default ({ linkedInput, validCodes }) => {
  const [editor] = useState(() => withReact(withHistory(withShortcodes(createEditor()))));
  const initialValue = useMemo(() => toSlateNodeTree(linkedInput.value, validCodes));
  const storeValueForSubmit = (updatedContent) => contentChanged(editor) && linkedInput.setRangeText(
    toStorableString(updatedContent, validCodes), 0, linkedInput.value.length
  );
  const editableElementId = `shortcodable-${linkedInput.id}`;
  makeLabelsFocusEditor(linkedInput, document.getElementById(editableElementId));
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
