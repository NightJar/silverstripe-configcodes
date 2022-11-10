/* global window */
import React, { useRef } from 'react';
import { useFocused, useSlate } from 'slate-react';
import ShortcodeEditor from './ShortcodeEditor';
import { ButtonGroup, ButtonToolbar } from 'reactstrap';
import Tip from 'admin/components/Tip/Tip';
import Button from 'admin/components/Button/Button';

export default ({ blockId: editableElementId }) => {
  const dialog = useRef();
  const editor = useSlate();
  const isFocused = useFocused();
  const openModal = () => {
    const menuDialog = dialog.current;
    const { selection } = editor;

    if (menuDialog && selection && isFocused) {
      menuDialog.showModal();
    }
  };

  const preventFocusSteal = (event) => event.preventDefault();

  const cursorInShortcode = editor.hasShortcode();

  return (
    <ButtonToolbar>
      <ButtonGroup>
        <Button icon={cursorInShortcode ? 'edit' : 'edit-write'} noText outline disabled={!isFocused} onMouseDown={preventFocusSteal} onClick={openModal}>
          {cursorInShortcode ? 'Edit' : 'Add'} shortcode
        </Button>
        <Button icon="block" noText outline disabled={!(isFocused && cursorInShortcode)} onMouseDown={preventFocusSteal}>
          Remove shortcode
        </Button>
        <Tip
          id={`${editableElementId}__help`}
          content="Press Alt+M to enter shortcode"
          icon="white-question"
        />
      </ButtonGroup>
      <ShortcodeEditor isEditing={cursorInShortcode} ref={dialog} />
    </ButtonToolbar>
  );
};
