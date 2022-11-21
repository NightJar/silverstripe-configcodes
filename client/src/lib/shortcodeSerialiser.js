import { parse } from '@bbob/parser';
import { Node, Element, Text } from 'slate';

const createSlateNode = {
  fromParserNode: ({ tag, attrs: attributes, content }) => ({
    type: 'shortcode',
    shortcode: tag,
    attributes,
    children: [{ text: content ? content.join() : '' }],
  }),
  fromString: (text) => ({ text }),
};

export const toSlateNodeTree = (input, validCodes) => {
  if (!validCodes || validCodes.length === 0 || !input) {
    return [createSlateNode.fromString(input)];
  }

  const parserOptions = { onlyAllowTags: validCodes };
  const codeNodes = parse(input, parserOptions);
  return codeNodes.map(
    (node) => (
      typeof node === 'object' && typeof node.tag === 'string' && node.tag
        ? createSlateNode.fromParserNode(node)
        : createSlateNode.fromString(node)
    )
  );
};

const toStringFromSlate = {
  shortcodeElement: (node) => {
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
  elementNode: (node) => (
    Element.isElementType(node, 'shortcode')
      ? toStringFromSlate.shortcodeElement(node)
      : toStorableString(node.children) // eslint-disable-line no-use-before-define
  ),
};

export const toStorableString = (tree) => tree.reduce(
  (value, node) => value + (Text.isText(node)
    ? toStringFromSlate.textNode(node)
    : toStringFromSlate.elementNode(node)
  ),
  ''
);

export default {
  deserialise: toSlateNodeTree,
  serialise: toStorableString,
};
