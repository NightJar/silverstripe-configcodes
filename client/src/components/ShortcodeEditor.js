import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useShortcodes } from 'lib/hookShortcodes';
import { loadComponent } from 'admin/lib/Injector';
// import SingleSelectField from 'admin/components/SingleSelectField/SingleSelectField';
import TextField from 'admin/components/TextField/TextField';
import Button from 'admin/components/Button/Button';

const serialiseForm = (form) => {
  const data = new FormData(form);
  const config = {};
  for (const [name, value] of data) { // eslint-disable-line no-restricted-syntax
    console.log(name);
    const configPath = name.split('.');
    const configField = configPath.pop();
    let configContext = config;
    while (configPath.length) {
      const nextContext = configPath.shift();
      configContext[nextContext] = configContext[nextContext] || {};
      configContext = configContext[nextContext];
    }
    configContext[configField] = value;
  }
  return config;
};

const makeSentenceCase = (string) => {
  const sentenceCase = (character, indexInString) => indexInString === 0 ? character.toUpperCase() : character;
  const wordSeparators = /\+|\.|-/g
  return string.replaceAll(wordSeparators, ' ').split('').map(sentenceCase).join('');
};

export default ({ isOpen, close, editing }) => {
  const shortcodeDescriptors = useShortcodes();
  const [selectedCode, setSelectedCode] = useState(null);
  const { shortcode, attributes = {}, content } = {
    ...editing,
    shortcode: selectedCode || (editing && editing.shortcode) || Object.keys(shortcodeDescriptors)[0]
  };
  console.log('render with: ', selectedCode, editing);
  const actions = {
    CANCEL: () => close(false),
    REMOVE: () => close(true),
    APPLY: (event) => close(serialiseForm(event.target.form)),
  };
  const cancelSubmission = (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    return false;
  };
  const contentRequired = shortcodeDescriptors[shortcode].content;
  const contentDisabled = contentRequired === null;
  const SingleSelectField = loadComponent('SingleSelectField');
  return (
    <Modal isOpen={isOpen} toggle={actions.CANCEL}>
      <ModalHeader toggle={actions.CANCEL}>{editing ? 'Edit' : 'Insert'} Shortcode</ModalHeader>
      <form onSubmit={cancelSubmission}>
        <ModalBody>
          <SingleSelectField
            id="shortcode-selector"
            name="shortcode"
            title="Shortcode"
            source={Object.keys(shortcodeDescriptors).map((name) => ({ title: name, value: name }))}
            value={shortcode}
            extraClass="no-change-track"
            onChange={(e) => setSelectedCode(e.target.value)}
          />
          <TextField
            id="shortcode-content"
            name="content"
            title="Content"
            value={content}
            extraClass="no-change-track"
            disabled={contentDisabled}
            required={contentRequired}
            message={contentDisabled && { type: 'info', value: 'This shortcode does not accept content' }}
          />
          <fieldset>
            <legend>Attributes</legend>
            {shortcode && Object.entries(shortcodeDescriptors[shortcode].parameters).map(([name, required]) => (
              <TextField
                key={shortcode + name}
                id={`shortcode-attribute__${name}`}
                name={`attributes.${name}`}
                title={makeSentenceCase(name)}
                required={required || undefined}
                value={attributes[name]}
                extraClass="no-change-track"
              />
            ))}
          </fieldset>
        </ModalBody>
        <ModalFooter>
          <Button icon="down-circled" color="primary" onClick={actions.APPLY}>Apply</Button>
          {editing && <Button icon="block" outline color="danger" onClick={actions.REMOVE}>Remove</Button>}
        </ModalFooter>
      </form>
    </Modal>
  );
}; // TODO: inject() this component with `admin` component dependencies
