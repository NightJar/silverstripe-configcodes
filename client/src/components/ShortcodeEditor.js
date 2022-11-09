import React, { forwardRef, useState } from 'react';
import { useShortcodes } from 'lib/hookShortcodes';

export default forwardRef(({ isEditing }, ref) => {
  const shortcodeConfig = useShortcodes();
  const [chosenCode, setChosenCode] = useState(isEditing ? null : Object.keys(shortcodeConfig)[0]);
  return (
    <dialog ref={ref}>
      {/* <div className="modal-dialog"> */}
      <div className="modal-header">
        <h5 className="modal-title">{isEditing ? 'Edit' : 'Insert'} Shortcode</h5>
        <button className="close" aria-label="Close" type="button" onClick={()=>ref.current.close()}><span aria-hidden>×</span></button>
      </div>
      <form method="dialog"><fieldset className="modal-body">
          <div className="field text form-group">
            <label className="form__field-label">Shortcode</label>
            <div className="form__field-holder">
              <select onChange={(e) => setChosenCode(e.target.value)}>
                {Object.keys(shortcodeConfig).map((name) => (
                  <option value={name} selected={name===chosenCode || undefined}>{name}</option>
                ))}
              </select>
            </div>
          </div>
          {chosenCode && Object.entries(shortcodeConfig[chosenCode].parameters).map(([name, required]) => (
            <div className="field text form-group">
              <label className="form__field-label">{name}</label>
              <div className="form__field-holder">
                <input name={name} required={required || undefined} className="text" />
              </div>
            </div>
          ))}
        </fieldset>
        <div className="modal-footer btn-group">
          <button type="submit" value="apply" className="btn btn-primary font-icon-down-circled">Apply</button>
          {isEditing && <button type="submit" value="remove" className="btn btn-outline-danger font-icon-block">Remove</button>}
        </div>
      </form>
      {/* </div> */}
    </dialog>
  );
});
