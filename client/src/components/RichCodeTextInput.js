import React, { useState, useCallback, useMemo } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import BBCode from 'slate-bbcode-serializer';

const ContentShortcode = ({ attributes, children }) => (<span className="shortcode" {...attributes}>{children}</span>);

const DefaultElement = ({attributes, children}) => (<span {...attributes}>{children}</span>);

export default ({ linkedInput }) => {
  const [editor] = useState(() => withReact(createEditor()));
  const elementRenderer = useCallback(
    (props) => props.element.type === 'shortcode' ? <ContentShortcode {...props} /> : <DefaultElement {...props} />,
    []
  );
  const codeFormatter = new BBCode({}, {});
  const storeValueForSubmit = (updatedContent) => {
    const astChanged = editor.operations.some((op) => 'set_selection' !== op.type);
    if (astChanged) {
      linkedInput.value = codeFormatter.serialize(updatedContent);
    }
  };
  const initialValue = useMemo(codeFormatter.deserialize(linkedInput.value));
  // [
  //   {
  //     children: [{text: 'This is a react editor that '}],
  //   },
  //   {
  //     type: 'shortcode',
  //     children: [{text: 'supports shortcodes'}],
  //   }
  // ];
  return (
    <Slate editor={editor} value={initialValue}>
      <Editable
        renderElement={elementRenderer}
        onChange={storeValueForSubmit}
      />
    </Slate>
  );
};
