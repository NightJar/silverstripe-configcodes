import isHotKey from 'is-hotkey';
import { applyShortcode } from '../lib/shortcodeTransforms';

const isShortcodeHotkey = isHotKey('alt+m');

export default (editor) => {
  const handleHotKey = (event) => {
    event.preventDefault();
    applyShortcode(editor, 'maori');
  };

  return (event) => isShortcodeHotkey(event) && handleHotKey(event);
};
