import { Transforms, Range } from 'slate';

// TODO: this presumes a text range is selected - no good for point insertion (no content support), nor altered content
export const applyShortcode = (editor, shortcode) => Range.isExpanded(editor.selection) && Transforms.wrapNodes(
  editor,
  { type: 'shortcode', shortcode },
  {
    split: true,
    match: (node) => !editor.isShortcode(node),
  }
);

export const updateShortcode = (editor, shortcodeSettings) => Transforms.setNodes(editor, shortcodeSettings, {
  match: node => editor.isShortcode(node),
});

export const removeShortcode = (editor) => Transforms.unwrapNodes(editor, {
  match: node => editor.isShortcode(node),
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
