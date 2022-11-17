import { Transforms, Range } from 'slate';

// TODO: this presumes a text range is selected - no good for point insertion (no content support), nor altered content
export const applyShortcode = (editor, { shortcode, attributes, content: text }) => {
  const shortcodeSlateElement = {
    type: 'shortcode',
    shortcode,
    attributes,
  };
  if (text) {
    shortcodeSlateElement.children = [{ text }];
  }
  return Range.isExpanded(editor.selection) && Transforms.wrapNodes(
    editor,
    shortcodeSlateElement,
    {
      split: true,
      match: (node) => !editor.isShortcode(node),
    }
  );
};

export const updateShortcode = (editor, shortcodeSettings) => Transforms.setNodes(editor, shortcodeSettings, {
  match: (node) => editor.isShortcode(node),
});

export const removeShortcode = (editor) => Transforms.unwrapNodes(editor, {
  match: (node) => editor.isShortcode(node),
});

// TODO: swap testing harcode for actual editor opening
const openShortcodeConfigurator = (editor) => applyShortcode(editor, 'maori');

// toggle for shortcode
export default (editor) => {
  if (editor.hasShortcode()) {
    return removeShortcode(editor);
  }
  if (Range.isExpanded(editor.selection)) {
    return openShortcodeConfigurator(editor);
  }
  return null;
};
