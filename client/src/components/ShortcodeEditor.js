import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Alert, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useShortcodes } from 'lib/hookShortcodes';
import { loadComponent } from 'admin/lib/Injector'; // eslint-disable-line import/no-unresolved, import/extensions
import UncontrolledTextField from 'components/UncontrolledTextField';
import { _tinject } from '../lib/translations';
// import SingleSelectField from 'admin/components/SingleSelectField/SingleSelectField'; // this isn't externalised!
import Button from 'admin/components/Button/Button'; // eslint-disable-line import/no-unresolved, import/extensions

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
    _tinject('CONTENT_NOTICE', { shortcode }),
    <br key="br" />,
    _tinject('CONTENT_WARNING', { shortcode }),
    <q key="selectedContent" className="shortcode-editor__selected-content">{selectedContent}</q>,
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
        ? close(serialiseForm(event.target.form))
        : true // do not cancel native validation events, etc. by returning false
    ),
  };
  const cancelSubmission = (event) => {
    event.preventDefault();
    event.nativeEvent.stopImmediatePropagation();
    return false;
  };
  return (
    <Modal isOpen={isOpen} toggle={actions.CANCEL} onClosed={() => setSelectedCode(null)}>
      <ModalHeader toggle={actions.CANCEL}>
        {_tinject('EDITOR_TITLE', { verb: _tinject(editing.shortcode ? 'VERB_EDIT' : 'VERB_ADD') })}
      </ModalHeader>
      <form onSubmit={cancelSubmission} className="shortcode-editor">
        <ModalBody>
          <SingleSelectField
            id="shortcode-selector"
            name="shortcode"
            title={_tinject('FIELD_SHORTCODE')}
            source={Object.keys(shortcodeDescriptors).map((name) => ({ title: makeSentenceCase(name), value: name }))}
            value={shortcode}
            extraClass="shortcode-editor__field shortcode-editor__field--shortcode no-change-track"
            onChange={(e) => setSelectedCode(e.target.value)}
          />
          <UncontrolledTextField
            id="shortcode-content"
            name="content"
            title={_tinject('FIELD_CONTENT')}
            defaultValue={content}
            className="shortcode-editor__field shortcode-editor__field--content no-change-track"
            extraClass={contentRequired ? 'shortcode-editor__field--required' : undefined}
            disabled={contentDisabled}
            required={contentRequired}
            message={contentDisabled ? buildMessage(shortcode, content) : undefined}
          />
          {contentDisabled && <input type="hidden" name="selfclosing" value="true" />}
          <fieldset>
            <legend>{_tinject('EDITOR_ATTRIBUTES')}</legend>
            {shortcode && Object.entries(shortcodeDescriptors[shortcode].parameters).map(([name, required]) => (
              <UncontrolledTextField
                key={shortcode + name}
                id={`shortcode-attribute__${name}`}
                name={`attributes.${name}`}
                title={makeSentenceCase(name)}
                required={required || undefined}
                defaultValue={attributes[name]}
                extraClass={required ? 'shortcode-editor__field--required' : undefined}
                className="shortcode-editor__field shortcode-editor__field--attribute no-change-track"
              />
            ))}
          </fieldset>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" icon="down-circled" color="primary" onClick={actions.APPLY}>
            {_tinject('ACTIONS_APPLY')}
          </Button>
          {editing.shortcode &&
            <Button icon="block" outline color="danger" onClick={actions.REMOVE}>{_tinject('ACTIONS_REMOVE')}</Button>
          }
          <Button color="subdued" onClick={actions.CANCEL}>{_tinject('ACTIONS_CANCEL')}</Button>
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
