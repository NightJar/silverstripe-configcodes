import { Editor, Element } from 'slate';

export default (editor) => {
  const { isInline: originalIsInline, isVoid: orignialIsVoid } = editor;
  return Object.assign(editor, {
    isShortcode: (element) => Element.isElementType(element, 'shortcode'),
    isInline: (element) => editor.isShortcode(element) || originalIsInline(element),
    isVoid: (element) => editor.isShortcode(element) && element.selfclosing || orignialIsVoid(element),
    isContentChanging: () => editor.operations.some((op) => op.type !== 'set_selection'),
    hasShortcode: () => {
      const [shortcodeNode] = Editor.nodes(editor, { match: (node) => editor.isShortcode(node) });
      return shortcodeNode;
    },
  });
};
