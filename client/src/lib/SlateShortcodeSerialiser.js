import { parse } from '@bbob/parser';
import { Node } from 'slate';

const mapShortcodeNodeToSlateNode = (node) => ({
  type: 'shortcode',
  tag: node.tag,
  attributes: node.attrs,
  children: [{ text: node.content ? node.content.join() : '' }],
});

export const toTree = (input) => {
  const codeNodes = parse(input);
  const slateNodes = codeNodes.map(
    (node) => (typeof node === 'object' && !!node.tag ? mapShortcodeNodeToSlateNode(node) : { text: node })
  );
  return slateNodes;
};

export const toStorableValue = (tree) => tree.map((node) => Node.string(node)).join(' ');

export default {
  deserialise: toTree,
  serialise: toStorableValue,
};
