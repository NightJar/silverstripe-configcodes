import i18n, { inject } from 'admin/i18n'; // _t relies on `this.lang` - so must i18n._t() rather than directly _t()

const moduleName = 'Shortcodable';

const entity = (id) => `${moduleName}.${id.toUpperCase()}`;

const verbs = {
  VERB_ADD: 'Add',
  VERB_EDIT: 'Edit',
  VERB_REMOVE: 'Remove',
};

// components/Toolbar
const buttons = {
  TOOLBAR_ACTION: '{verb} shortcode',
  TOOLBAR_HELP: 'Shortcode editor help'
};

// components/ShortcodeEditor
const editorControls = {
  EDITOR_TITLE: '{verb} Shortcode',
  FIELD_SHORTCODE: 'Shortcode',
  FIELD_CONTENT: 'Content',
  CONTENT_NOTICE: 'Content is not accepted by the {shortcode} shortcode.',
  CONTENT_WARNING: ' Selected content (as follows) will be deleted when applying this configuration: ',
  EDITOR_ATTRIBUTES: 'Attributes',
  ACTIONS_APPLY: 'Apply',
  ACTIONS_REMOVE: 'Remove',
  ACTIONS_CANCEL: 'Cancel',
};

export const DICTIONARY = {
  ...verbs,
  ...buttons,
  ...editorControls,
};

export const _tinject = (entry, params) => inject(i18n._t(entity(entry), DICTIONARY[entry]), params || {});

export default Object.keys(DICTIONARY).reduce(
  (table, entry) => ({ ...table, [entity(entry)]: DICTIONARY[entry] }),
  {}
);
