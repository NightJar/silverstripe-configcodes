import { Node, Transforms } from 'slate';

export const applyShortcode = (editor, shortcode) => {
  console.log(editor, shortcode);
  return Transforms.wrapNodes(
  editor,
  { type: 'shortcode', shortcode },
  {
    split: true,
    // match: (node) => Node.isNode(node) && node.type !== 'shortcode'
  }
);}

export const removeShortcode = (editor) => Transforms.unwrapNodes(editor, {
  match: node => Node.isNode(node) && node.type === 'shortcode'
});

export default {
  activate: applyShortcode,
  deactivate: removeShortcode,
};
