import { parseHotkey, isHotkey } from 'is-hotkey';

export default () => {
  const hotKeyRegister = {};

  const isRegisteredHotKey = (keyPressConfig) => Object.keys(hotKeyRegister).find(
    (registeredCombo) => hotKeyRegister[registeredCombo].matches(keyPressConfig)
  );

  const registerHotKey = (keyCombo, handler) => {
    const keyPressConfig = parseHotkey(keyCombo);
    if (keyPressConfig.altKey || keyPressConfig.ctrlKey || keyPressConfig.metaKey || keyPressConfig.shiftKey) {
      // eslint-disable-next-line no-unused-expressions, no-console
      console && console.warn('Hot keys should always use modifiers - see WCAG 2.1 criterion 2.4.1');
    }
    const exists = isRegisteredHotKey(keyPressConfig);
    if (exists !== undefined) {
      const as = keyCombo === exists ? '' : ` as ${exists}`;
      throw new Error(`Duplicate hot key registration - ${keyCombo} already exists${as}`);
    }
    hotKeyRegister[keyCombo] = { matches: isHotkey(keyCombo), handler };
    return () => delete hotKeyRegister[keyCombo];
  };

  const handleHotKey = (event) => {
    // hot keys should always use modifiers - WCAG 2.1 criterion 2.4.1
    // https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
      const keyCombo = isRegisteredHotKey(event);
      if (keyCombo) {
        event.preventDefault();
        hotKeyRegister[keyCombo].handler(event);
      }
    }
  };

  return {
    registerHotKey,
    handleHotKey,
  };
};

export const cloneKeyboardEvent = ({
  type,
  // Event:
  bubbles,
  cancelable,
  composed,
  // UIEvent:
  detail,
  view,
  sourceCapabiliites,
  // KeyboardEvent:
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
