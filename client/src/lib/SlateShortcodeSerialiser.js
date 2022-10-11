import { parse } from '@bbob/parser';
import { Node } from 'slate';

const createSlateNode = {
  fromShortcodeNode: ({ tag, attrs: attributes, content }) => ({
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

const fromSlateShortcodeNodeToString = (node) => {
  const { shortcode: code, attributes = {}} = node;
  const stringifyAttribute = (key) => {
    const value = attributes[key];
    const needsQuotes = value.match(/\s/);
    return ` ${key}=` + (needsQuotes ? `"${value}"` : value);
  }
  const attributesString = Object.keys(attributes).reduce(
    (prev, attribute) => `${prev} ${stringifyAttribute(attribute)}`,
    ''
  );
  return `[${code}${attributesString}]${Node.string(node)}[/${code}]`;
};

export const toStorableString = (tree) => tree.reduce(
  (value, node) => value + (node.type === 'shortcode' ? fromSlateShortcodeNodeToString(node) : Node.string(node)),
  ''
);

export default {
  deserialise: toSlateNodeTree,
  serialise: toStorableString,
};
