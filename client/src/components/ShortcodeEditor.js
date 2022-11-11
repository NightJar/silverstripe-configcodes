import React, { forwardRef, useState } from 'react';
import { useShortcodes } from 'lib/hookShortcodes';

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

export default forwardRef(({ isEditing }, dialogRef) => {
  const shortcodeDescriptors = useShortcodes();
  const [config, setConfig] = useState(isEditing ? null : { shortcode: Object.keys(shortcodeDescriptors)[0] });
  const { shortcode: selectedCode, attributes = {} } = config;
  console.log('render with: ', config);
  const updateConfig = (form) => {
    const newConfig = serialiseForm(form);
    setConfig(newConfig);
    console.log('newconf:', newConfig);
  };
  return (
    <dialog
      ref={dialogRef}
      onClose={() => console.log('close', dialogRef.current.returnValue)}
      onCancel={() => dialogRef.current.returnValue = 'false'} // eslint-disable-line no-return-assign,no-param-reassign
    >
      {/* <div className="modal-dialog"> */}
      <div className="modal-header">
        <h5 className="modal-title">{isEditing ? 'Edit' : 'Insert'} Shortcode</h5>
        <button className="close" aria-label="Close" type="button" onClick={() => dialogRef.current.close('false')}>
          <span aria-hidden>×</span>
        </button>
      </div>
      <form method="dialog" onChange={(e) => console.log('targets', e.target) || updateConfig(e.target.form)}>
        <fieldset className="modal-body">
          <legend>Attributes</legend>
          <div className="field text form-group">
            <label className="form__field-label" htmlFor="shortcode-selector">Shortcode</label>
            <div className="form__field-holder">
              <select id="shortcode-selector" name="shortcode" className="no-change-track">
                {Object.keys(shortcodeDescriptors).map((name) => (
                  <option value={name} selected={name === selectedCode || undefined}>{name}</option>
                ))}
              </select>
            </div>
          </div>
          {selectedCode && Object.entries(shortcodeDescriptors[selectedCode].parameters).map(([name, required]) => (
            <div className="field text form-group">
              <label className="form__field-label" htmlFor={`shortcode-attribute__${name}`}>{name}</label>
              <div className="form__field-holder">
                <input
                  id={`shortcode-attribute__${name}`}
                  name={`attributes.${name}`}
                  value={attributes[name]}
                  required={required || undefined}
                  className="text no-change-track"
                />
              </div>
            </div>
          ))}
        </fieldset>
        <div className="modal-footer btn-group">
          <button
            type="submit"
            className="btn btn-primary font-icon-down-circled"
            value="false"
            onClick={(e) => e.target.value = JSON.stringify(config)} // eslint-disable-line no-return-assign
          >
            Apply
          </button>
          {isEditing && <button
            type="button"
            className="btn btn-outline-danger font-icon-block"
            value="true"
            // prevent blocking by `required` attribute fields by directly closing (not submitting)
            onClick={(e) => dialogRef.current.close(e.target.value)}
          >
            Remove
          </button>}
        </div>
      </form>
      {/* </div> */}
    </dialog>
  );
});
