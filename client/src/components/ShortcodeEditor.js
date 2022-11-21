import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Alert, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useShortcodes } from 'lib/hookShortcodes';
import { loadComponent } from 'admin/lib/Injector';
import UncontrolledTextField from 'components/UncontrolledTextField';
// import SingleSelectField from 'admin/components/SingleSelectField/SingleSelectField'; // this isn't externalised!
import Button from 'admin/components/Button/Button';

const serialiseForm = (form) => {
  const data = new FormData(form);
  const config = {};
  for (const [name, value] of data) { // eslint-disable-line no-restricted-syntax
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
  const sentenceCase = (character, indexInString) => (indexInString === 0 ? character.toUpperCase() : character);
  const wordSeparators = /\+|\.|-/g;
  return string.replaceAll(wordSeparators, ' ').split('').map(sentenceCase).join('');
};

const buildMessage = (shortcode, selectedContent) => {
  const type = selectedContent ? 'warning' : 'info';
  const message = [
    `Content is not accepted by the ${shortcode} shortcode.`,
    <br key="br" />,
    ' Selected content (as follows) will be deleted when applying this configuration: ',
    <q key="selectedContent" className="shortcode__selected-content">{selectedContent}</q>,
  ];

  const props = {
    color: type,
    tag: 'p',
    children: selectedContent ? message : [message.shift()],
  };

  return {
    type,
    value: {
      react: <Alert {...props} />
    }
  };
};

export default ({ isOpen, close, editing /* , ...injectedComponents */ }) => {
  const SingleSelectField = loadComponent('SingleSelectField');
  // const { Button, SingleSelectField, UncontrolledTextField } = injectedComponents;
  const shortcodeDescriptors = useShortcodes();
  const [selectedCode, setSelectedCode] = useState(null);
  const { shortcode, attributes = {}, content } = {
    ...editing,
    shortcode: selectedCode || editing.shortcode || Object.keys(shortcodeDescriptors)[0]
  };
  const contentRequired = shortcodeDescriptors[shortcode].content;
  const contentDisabled = contentRequired === null;
  const actions = {
    CANCEL: () => close(false),
    REMOVE: () => close(true),
    APPLY: (event) => (
      event.target.form.reportValidity()
        ? close(serialiseForm(event.target.form)) && setSelectedCode(null)
        : true // do not cancel native validation events, etc. by returning false
    ),
  };
  const cancelSubmission = (event) => {
    event.preventDefault();
    event.nativeEvent.stopImmediatePropagation();
    return false;
  };
  return (
    <Modal isOpen={isOpen} toggle={actions.CANCEL}>
      <ModalHeader toggle={actions.CANCEL}>{editing.shortcode ? 'Edit' : 'Insert'} Shortcode</ModalHeader>
      <form onSubmit={cancelSubmission} className="shortcode-editor">
        <ModalBody>
          <SingleSelectField
            id="shortcode-selector"
            name="shortcode"
            title="Shortcode"
            source={Object.keys(shortcodeDescriptors).map((name) => ({ title: makeSentenceCase(name), value: name }))}
            value={shortcode}
            extraClass="shortcode-editor__shortcode no-change-track"
            onChange={(e) => setSelectedCode(e.target.value)}
          />
          <UncontrolledTextField
            id="shortcode-content"
            name="content"
            title="Content"
            defaultValue={content}
            className="shortcode-editor__content no-change-track"
            disabled={contentDisabled}
            required={contentRequired}
            message={contentDisabled ? buildMessage(shortcode, content) : undefined}
          />
          <fieldset>
            <legend>Attributes</legend>
            {shortcode && Object.entries(shortcodeDescriptors[shortcode].parameters).map(([name, required]) => (
              <UncontrolledTextField
                key={shortcode + name}
                id={`shortcode-attribute__${name}`}
                name={`attributes.${name}`}
                title={makeSentenceCase(name)}
                required={required || undefined}
                defaultValue={attributes[name]}
                className="shortcode-editor__attribute no-change-track"
              />
            ))}
          </fieldset>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" icon="down-circled" color="primary" onClick={actions.APPLY}>Apply</Button>
          {editing.shortcode && <Button icon="block" outline color="danger" onClick={actions.REMOVE}>Remove</Button>}
          <Button color="subdued" onClick={actions.CANCEL}>Cancel</Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};
// TODO: inject() this component with `admin` component dependencies.
// Should we though? TextField base Component isn't registered with Injector - which would make transforms only apply
// to 'some' fields, and be weird & inconsistant. Plus applying HOCs (aka decorators) via injection means they have to
// be done on render/instantiation - seems like it might be a performance hit.
// We could export UncontrolledTextField and register it with Injector though...
// None of the fields are directly registered, they're all FieldHolder'd. This would be consistent.
