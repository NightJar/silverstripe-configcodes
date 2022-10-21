import { Element } from 'slate';

export default (editor) => {
  const { isInline: originalIsInline } = editor;
  return Object.assign(editor, {
    isInline: (element) => Element.isElementType(element, 'shortcode') || originalIsInline(element),
    isContentChanging: () => editor.operations.some((op) => op.type !== 'set_selection'),
  });
};
