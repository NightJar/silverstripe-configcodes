import React, { forwardRef, useState } from 'react';
import { useShortcodes } from 'lib/hookShortcodes';

export default forwardRef(({ isEditing }, ref) => {
  const shortcodeDescriptors = useShortcodes();
  const [config, setConfig] = useState(isEditing ? null : { shortcode: Object.keys(shortcodeDescriptors)[0] });
  const { shortcode: selectedCode } = config;
  console.log(config)
  const serialiseForm = (form) => {
    const data = new FormData(form);
    const newConfig = {};
    for (const [name, value] of data) {
      console.log(name)
      const configPath = name.split('.');
      const configField = configPath.pop();
      let configContext = newConfig;
      while (configPath.length) {
        const nextContext = configPath.shift();
        configContext[nextContext] = configContext[nextContext] || {};
        configContext = configContext[nextContext];
      }
      configContext[configField] = value;
    }
    setConfig(newConfig);
    console.log('newconf:', newConfig);
  }
  return (
    <dialog ref={ref} onClose={()=>console.log('close', ref.current.returnValue)} onCancel={()=>ref.current.returnValue=''}>
      {/* <div className="modal-dialog"> */}
      <div className="modal-header">
        <h5 className="modal-title">{isEditing ? 'Edit' : 'Insert'} Shortcode</h5>
        <button className="close" aria-label="Close" type="button" onClick={()=>ref.current.close('')}>
          <span aria-hidden>×</span>
        </button>
      </div>
      <form method="dialog" onChange={(e) => console.log('targets',e.target)||serialiseForm(e.target.form)||e.stopPropagation()}>
        <fieldset className="modal-body">
          <legend>Attributes</legend>
          <div className="field text form-group">
            <label className="form__field-label">Shortcode</label>
            <div className="form__field-holder">
              <select name="shortcode" className="no-change-track">
                {Object.keys(shortcodeDescriptors).map((name) => (
                  <option value={name} selected={name===selectedCode || undefined}>{name}</option>
                ))}
              </select>
            </div>
          </div>
          {selectedCode && Object.entries(shortcodeDescriptors[selectedCode].parameters).map(([name, required]) => (
            <div className="field text form-group">
              <label className="form__field-label" for={`shortcode-attribute__${name}`}>{name}</label>
              <div className="form__field-holder">
                <input id={`shortcode-attribute__${name}`} name={`attributes.${name}`} required={required || undefined} className="text no-change-track" />
              </div>
            </div>
          ))}
        </fieldset>
        <div className="modal-footer btn-group">
          <button type="submit" value={JSON.stringify(config)} className="btn btn-primary font-icon-down-circled">Apply</button>
          {isEditing && <button type="submit" value="remove" className="btn btn-outline-danger font-icon-block">Remove</button>}
        </div>
      </form>
      {/* </div> */}
    </dialog>
  );
});
