import isHotKey from 'is-hotkey';
import openShortcodeEditor from 'lib/shortcodeTransforms.js';

const isShortcodeHotkey = isHotKey('alt+m');

export default (editor) => {
  const handleHotKey = (event) => {
    event.preventDefault();
    openShortcodeEditor(editor);
  };

  return (event) => isShortcodeHotkey(event) && handleHotKey(event);
};

export const cloneKeyboardEvent = ({
  type,
  // Event
  bubbles,
  cancelable,
  composed,
  // UIEvent
  detail,
  view,
  sourceCapabiliites,
  // KeyboardEvent
  key,
  code,
  location,
  repeat,
  isComposing,
  charCode,
  keyCode,
  ctrlKey,
  shiftKey,
  altKey,
  metaKey,
}, overrideType = null, overrideOptions = {}) => new KeyboardEvent(
  overrideType || type,
  {
    bubbles,
    cancelable,
    composed,
    detail,
    view,
    sourceCapabiliites,
    key,
    code,
    location,
    repeat,
    isComposing,
    charCode,
    keyCode,
    ctrlKey,
    shiftKey,
    altKey,
    metaKey,
    ...overrideOptions,
  }
);
