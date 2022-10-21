import { parse } from '@bbob/parser';
import { Node, Element } from 'slate';

const createSlateNode = {
  fromShortcodeNode: ({ tag, attrs: attributes, content }) => ({
    type: 'shortcode',
    shortcode: tag,
    attributes,
    children: [{ text: content ? content.join() : '' }],
  }),
  fromString: (text) => ({ text }),
};

export const toSlateNodeTree = (input, validCodes) => {
  if (!validCodes || validCodes.length === 0) {
    return [createSlateNode.fromString(input)];
  }

  const parserOptions = { onlyAllowTags: validCodes };
  const codeNodes = parse(input, parserOptions);
  return codeNodes.map(
    (node) => (
      typeof node === 'object' && typeof node.tag === 'string' && node.tag
        ? createSlateNode.fromShortcodeNode(node)
        : createSlateNode.fromString(node)
    )
  );
};

const toStringFromSlate = {
  shortcodeNode: (node) => {
    const { shortcode: code, attributes = {} } = node;
    const stringifyAttribute = (key) => {
      const value = attributes[key];
      const needsQuotes = value.match(/\s/);
      return ` ${key}=${needsQuotes ? `"${value}"` : value}`;
    };
    const attributesString = Object.keys(attributes).reduce(
      (prev, attribute) => `${prev} ${stringifyAttribute(attribute)}`,
      ''
    );
    return `[${code}${attributesString}]${Node.string(node)}[/${code}]`;
  },
  textNode: (node) => Node.string(node),
};

export const toStorableString = (tree) => tree.reduce(
  (value, node) => value + (Element.isElementType(node, 'shortcode')
    ? toStringFromSlate.shortcodeNode(node)
    : toStringFromSlate.textNode(node)
  ),
  ''
);

export default {
  deserialise: toSlateNodeTree,
  serialise: toStorableString,
};
