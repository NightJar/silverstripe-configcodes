/* global window */
import React, { useEffect, useRef } from 'react';
import { Editor, Range } from 'slate';
import { useFocused, useSlate } from 'slate-react';
import ShortcodeEditor from './ShortcodeEditor.jsx';

export default ({ title }) => {
  const dialog = useRef();
  const editor = useSlate();
  const inFocus = useFocused();
  useEffect(() => {
    const menuElement = dialog.current;
    const { selection } = editor;

    if (
      !menuElement
      || !selection
      || !inFocus
      || Range.isCollapsed(selection)
      || Editor.string(editor, selection) === ''
    ) {
      if (menuElement) {
        menuElement.removeAttribute('style');
      }
    }
  });

  const shortcodeInRange = editor.hasShortcode();

  return (
    <div
      role="toolbar"
      onMouseDown={e => e.preventDefault()} // prevent focus being taken from editor
      className="shortcodable-input__toolbar"
      tabIndex="-1"
    >
      <button
        onClick={() => dialog.current.showModal()}
      >
        {shortcodeInRange ? 'Edit' : 'Add'}
      </button>
      {shortcodeInRange && 'or'}
      {shortcodeInRange && <button>Remove</button>}
      {title}
      <ShortcodeEditor ref={dialog} />
    </div>
  );
};
