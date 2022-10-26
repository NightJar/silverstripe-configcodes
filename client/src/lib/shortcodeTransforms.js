import { Transforms, Range } from 'slate';

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

const openShortcodeConfigurator = (editor) => applyShortcode(editor, 'maori');

export default (editor) => {
  if (editor.hasShortcode()) {
    return removeShortcode(editor);
  }
  if (Range.isExpanded(editor.selection)) {
    return openShortcodeConfigurator(editor);
  }
  return null;
};
