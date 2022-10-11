import React, { useState, useCallback, useMemo } from 'react';
import { createEditor, Node, Transforms } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import { toStorableString, toSlateNodeTree } from '../lib/SlateShortcodeSerialiser';
import isHotKey from 'is-hotkey';

const ContentShortcode = ({ element: { shortcode }, attributes, children }) => (
  <span
    className={`shortcode shortcode--${shortcode}`}
    data-shortcode={shortcode}
    {...attributes}
  >
    {children}
  </span>
);

const DefaultElement = ({ attributes, children }) => (<span {...attributes}>{children}</span>);

const isShortcodeHotkey = isHotKey('alt+m');

export default ({ linkedInput, validCodes }) => {
  const [editor] = useState(() => withReact(withHistory(createEditor())));
  const elementRenderer = useCallback(
    (props) => ((props.element.type === 'shortcode') ? <ContentShortcode {...props} /> : <DefaultElement {...props} />),
    []
  );
  const storeValueForSubmit = (updatedContent) => {
    const astChanged = editor.operations.some((op) => op.type !== 'set_selection');
    if (astChanged) {
      linkedInput.setRangeText(toStorableString(updatedContent, validCodes), 0, linkedInput.value.length);
    }
  };
  const initialValue = useMemo(() => toSlateNodeTree(linkedInput.value, validCodes));
  const detectHotKey = (event) => isShortcodeHotkey(event) && handleHotKey(event);
  const handleHotKey = (event) => {
    event.preventDefault();
    Transforms.wrapNodes(
      editor,
      { type: 'shortcode', shortcode: 'maori' },
      {
        split: true,
        match: (node) => Node.isNode(node) && node.type !== 'shortcode'
      }
    );
  }
  const editableElementId = `shortcodable-${linkedInput.id}`;
  linkedInput.labels.forEach(
    label => label.addEventListener(
      'click',
      (event) => {
        event.preventDefault();
        document.getElementById(editableElementId).focus();
      }
    )
  );
  return (
    <Slate editor={editor} value={initialValue} onChange={storeValueForSubmit}>
      <Editable
        id={editableElementId}
        aria-labelledby={linkedInput.labels[0].id}
        className="form-control shortcodable-input"
        onKeyDown={detectHotKey}
        renderElement={elementRenderer}
      />
    </Slate>
  );
};
