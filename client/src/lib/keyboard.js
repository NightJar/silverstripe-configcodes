import { parseHotkey, isHotkey } from 'is-hotkey';

export default () => {
  const hotKeyRegister = {};

  const isRegisteredHotKey = (keyPressConfig) => Object.keys(hotKeyRegister).find(
    (registeredCombo) => hotKeyRegister[registeredCombo].matches(keyPressConfig)
  );

  const registerHotKey = (keyCombo, handler) => {
    const keyPressConfig = parseHotkey(keyCombo);
    const exists = isRegisteredHotKey(keyPressConfig);
    if (exists !== undefined) {
      const as = keyCombo === exists ? '' : ` as ${exists}`
      throw new Error(`Duplicate hot key registration - ${keyCombo} already exists${as}`);
    }
    hotKeyRegister[keyCombo] = { matches: isHotkey(keyCombo), handler};
    return () => delete hotKeyRegister[keyCombo];
  };

  const handleHotKey = (event) => {
    const keyCombo = isRegisteredHotKey(event)
    if (keyCombo) {
      event.preventDefault();
      hotKeyRegister[keyCombo].handler(event);
    }
  };

  return {
    registerHotKey,
    handleHotKey,
  }
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
