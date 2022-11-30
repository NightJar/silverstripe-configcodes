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

export const applyShortcode = (editor, { content: text = '', ...shortcodeSettings }) => {
  const shortcodeSlateElement = {
    type: 'shortcode',
    ...shortcodeSettings,
  };
  return Range.isExpanded(editor.selection)
    ? convertToShortcode(editor, text, shortcodeSlateElement)
    : insertShortcode(editor, { ...shortcodeSlateElement, children: [{ text }] });
};

export const updateShortcode = (editor, { content: text = '', ...shortcodeSettings }) => {
  Transforms.setNodes(
    editor,
    shortcodeSettings,
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
) || Transforms.removeNodes(
  editor,
  {
    match: (node) => editor.isShortcode(node)
  }
);
