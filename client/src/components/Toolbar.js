/* global window */
import React, { useState } from 'react';
import { useFocused, useSlate } from 'slate-react';
import ShortcodeEditor from 'components/ShortcodeEditor';
import ToolbarButton from 'components/ToolbarButton';
import { ButtonGroup, ButtonToolbar } from 'reactstrap'; // eslint-disable-line import/no-extraneous-dependencies
import { applyShortcode, updateShortcode, removeShortcode } from 'lib/shortcodeTransforms';
import Tip from 'admin/components/Tip/Tip';
import { Node, Range } from 'slate';
import { _tinject } from '../lib/translations';

export default ({ blockId: editableElementId }) => {
  const [editorIsOpen, setEditorOpen] = useState(false);
  const editor = useSlate();
  const isFocused = useFocused();

  const cursorInShortcode = editor.hasShortcode();
  const selectedText = editor.selection
    && Range.isExpanded(editor.selection)
    && Node.string({ children: editor.getFragment() });
  const editing = !cursorInShortcode ? { content: selectedText || undefined } : {
    shortcode: cursorInShortcode[0].shortcode,
    attributes: cursorInShortcode[0].attributes,
    content: Node.string(cursorInShortcode[0]),
  };

  const closeModal = (amendment) => {
    setEditorOpen(false);

    if (amendment) {
      if (amendment === true) {
        removeShortcode(editor);
      } else if (cursorInShortcode) {
        updateShortcode(editor, amendment);
      } else {
        applyShortcode(editor, amendment);
      }
    }

    return true;
  };

  return (
    <ButtonToolbar>
      <ButtonGroup>
        <ToolbarButton
          icon={cursorInShortcode ? 'edit' : 'edit-write'}
          noText
          outline
          disabled={!isFocused}
          onClick={() => setEditorOpen(true)}
          aria-label={_tinject('TOOLBAR_ACTION', { verb: _tinject(cursorInShortcode ? 'VERB_EDIT' : 'VERB_ADD') })}
          hotKey="Alt+S"
        >
          <ShortcodeEditor isOpen={editorIsOpen} close={closeModal} editing={editing} />
        </ToolbarButton>
        <ToolbarButton
          icon="block"
          noText
          outline
          disabled={!(isFocused && cursorInShortcode)}
          onClick={() => closeModal(true)}
          aria-label={_tinject('TOOLBAR_ACTION', { verb: _tinject('VERB_REMOVE') })}
          hotKey="Alt+Shift+S"
        />
        <Tip
          id={`${editableElementId}__help`}
          content="Press Alt+S to bring up an editor to create, amend, or remove a shortcode"
          icon="white-question"
          fieldTitle={`${editableElementId} editor help`}
          tabIndex="-1"
          hotKey="alt+k"
          aria-label={_tinject('TOOLBAR_HELP')}
        />
      </ButtonGroup>
    </ButtonToolbar>
  );
};
