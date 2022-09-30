import React, { useState, useCallback, useMemo } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { toStorableValue, toTree } from '../lib/SlateShortcodeSerialiser';

const ContentShortcode = ({ attributes, children }) => (<span className="shortcode" {...attributes}>{children}</span>);

const DefaultElement = ({ attributes, children }) => (<span {...attributes}>{children}</span>);

export default ({ linkedInput }) => {
  const [editor] = useState(() => withReact(createEditor()));
  const elementRenderer = useCallback(
    (props) => ((props.element.type === 'shortcode') ? <ContentShortcode {...props} /> : <DefaultElement {...props} />),
    []
  );
  const storeValueForSubmit = (updatedContent) => {
    const astChanged = editor.operations.some((op) => op.type !== 'set_selection');
    if (astChanged) {
      linkedInput.setRangeText(toStorableValue(updatedContent), 0, linkedInput.value.length);
    }
  };
  const initialValue = useMemo(() => toTree(linkedInput.value));
  return (
    <Slate editor={editor} value={initialValue} onChange={storeValueForSubmit}>
      <Editable renderElement={elementRenderer} />
    </Slate>
  );
};
