/* global window */
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Editor, Range } from 'slate';
import { useFocused, useSlate } from 'slate-react';

export const RichInputMenu = ({ title }) => {
  const ref = useRef();
  const editor = useSlate();
  const inFocus = useFocused();
  useEffect(() => {
    const menuElement = ref.current;
    const { selection } = editor;

    if (!menuElement || !selection || !inFocus || Range.isCollapsed(selection) || Editor.string(editor, selection) === '') {
      if (menuElement) {
        menuElement.removeAttribute('style');
      }
      return;
    }

    const { top, left, width: selectionWidth } = window.getSelection().getRangeAt(0).getBoundingClientRect();
    const { offsetHeight: menuHeight, offsetWidth: menuWidth } = menuElement;
    const hoverBuffer = 5;
    menuElement.style.position = 'absolute';
    menuElement.style.top = `${top + window.pageYOffset - menuHeight - hoverBuffer}px`;
    menuElement.style.left = `${left + window.pageXOffset - menuWidth / 2 + selectionWidth / 2 }px`;
  });

  return (
    <div
      ref={ref}
      role="toolbar"
      onMouseDown={e => e.preventDefault()} // prevent focus being taken from editor
      className="shortcodable-input__menu"
    >
      Menu{title && " for "}{title}
      <button>Add shortcode</button>
      <button>Remove shortcode</button>
      <button>Edit shortcode</button>
    </div>
  );
};

export default (p) => createPortal(<RichInputMenu {...p} />, document.body);
