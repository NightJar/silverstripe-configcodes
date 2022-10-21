import { Node, Element, Transforms } from 'slate';

export const applyShortcode = (editor, shortcode) => Transforms.wrapNodes(
  editor,
  { type: 'shortcode', shortcode },
  {
    split: true,
    match: (node) => Node.isNode(node) && !Element.isElementType(node, 'shortcode')
  }
);

export const removeShortcode = (editor) => Transforms.unwrapNodes(editor, {
  match: node => Element.isElementType(node, 'shortcode')
});

export default {
  activate: applyShortcode,
  deactivate: removeShortcode,
};
