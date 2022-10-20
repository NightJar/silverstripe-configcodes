export default (editor) => ({
  ...editor,
  isInline: (element) => element.type === 'shortcode' || editor.isInline(element),
});
