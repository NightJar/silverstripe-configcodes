import { Editor, Range, Transforms } from 'slate';

const convertToShortcode = (editor, text, shortcodeSettings) => {
  Transforms.wrapNodes(
    editor,
    shortcodeSettings,
    {
      split: true,
      match: (node) => !editor.isShortcode(node),
    }
  );
  Editor.insertText(editor, text);
};

const insertShortcode = (editor, shortcodeSettings) => Transforms.insertNodes(editor, shortcodeSettings);

export const applyShortcode = (editor, { shortcode, attributes, content: text = '' }) => {
  const shortcodeSlateElement = {
    type: 'shortcode',
    shortcode,
    attributes,
  };
  return Range.isExpanded(editor.selection)
    ? convertToShortcode(editor, text, shortcodeSlateElement)
    : insertShortcode(editor, { ...shortcodeSlateElement, children: [{ text }] });
};

export const updateShortcode = (editor, { shortcode, attributes, content: text = '' }) => {
  Transforms.setNodes(
    editor,
    {
      shortcode,
      attributes,
    },
    {
      match: (node) => editor.isShortcode(node),
    }
  );
  const [, shortcodePath] = editor.hasShortcode();
  Transforms.insertText(editor, text, { at: shortcodePath });
};

export const removeShortcode = (editor) => Transforms.unwrapNodes(
  editor,
  {
    match: (node) => editor.isShortcode(node),
  }
);
