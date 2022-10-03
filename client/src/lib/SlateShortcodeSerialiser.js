import { parse } from '@bbob/parser';
import { Node } from 'slate';

const createSlateNode = {
  fromShortcodeNode: ({tag, attrs: attributes, content}) => ({
    type: 'shortcode',
    shortcode: tag,
    attributes,
    children: [{ text: content ? content.join() : '' }],
  }),
  fromText: (text) => ({
    children: [{ text }],
  })
};

export const toSlateNodeTree = (input, validCodes) => {
  if (!validCodes || validCodes.length === 0) {
    return [createSlateNode.fromText(input)];
  }

  const parserOptions = { onlyAllowTags: validCodes };
  const codeNodes = parse(input, parserOptions);
  return codeNodes.map(
    (node) => (
      typeof node === 'object' && !!node.tag
        ? createSlateNode.fromShortcodeNode(node)
        : createSlateNode.fromText(node)
    )
  );
};

export const toStorableValue = (tree) => tree.map((node) => Node.string(node)).join(' ');

export default {
  deserialise: toSlateNodeTree,
  serialise: toStorableValue,
};
