/* global window */
import React, { useState } from 'react';
import { useFocused, useSlate } from 'slate-react';
import ShortcodeEditor from 'components/ShortcodeEditor';
import ToolbarButton from 'components/ToolbarButton';
import { ButtonGroup, ButtonToolbar } from 'reactstrap'; // eslint-disable-line import/no-extraneous-dependencies
import { removeShortcode } from 'lib/shortcodeTransforms';
import Tip from 'admin/components/Tip/Tip';
import { Node, Range } from 'slate';

export default ({ blockId: editableElementId }) => {
  const [editorIsOpen, setEditorOpen] = useState(false);
  const editor = useSlate();
  const isFocused = useFocused();
  const closeModal = (amendment) => {
    setEditorOpen(false);
    if (!amendment) {
      return;
    }
    return (amendment === true) ? removeShortcode(editor) : console.log(amendment);// applyShortcode();
  };

  const preventFocusSteal = (event) => event.preventDefault();

  const cursorInShortcode = editor.hasShortcode();
  const selectedText = editor.selection && Range.isExpanded(editor.selection) && Node.string({ children: editor.getFragment() });
  const editing = !cursorInShortcode ? { content: selectedText || undefined } : {
    shortcode: cursorInShortcode[0].shortcode,
    attributes: cursorInShortcode[0].attributes,
    content: Node.string(cursorInShortcode[0]),
  };

  return (
    <ButtonToolbar>
      <ButtonGroup>
        <ToolbarButton
          icon={cursorInShortcode ? 'edit' : 'edit-write'}
          noText
          outline
          disabled={!isFocused}
          onMouseDown={preventFocusSteal}
          onClick={() => setEditorOpen(true)}
          aria-label={`${cursorInShortcode ? 'Edit' : 'Add'} shortcode`}
        />
        <ToolbarButton
          icon="block"
          noText
          outline
          disabled={!(isFocused && cursorInShortcode)}
          onMouseDown={preventFocusSteal}
          onClick={() => closeModal(true)}
          aria-label="Remove shortcode"
        />
        <Tip
          id={`${editableElementId}__help`}
          content="Press Alt+M to enter shortcode"
          icon="white-question"
          fieldTitle={`${editableElementId} editor help`}
          tabIndex="-1"
        />
      </ButtonGroup>
      <ShortcodeEditor isOpen={editorIsOpen} close={closeModal} editing={editing} />
    </ButtonToolbar>
  );
};
