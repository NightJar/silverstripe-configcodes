import React, { forwardRef } from 'react';

export default forwardRef(({ isEditing }, ref) => (
  <dialog ref={ref}>
    <form method="dialog">
      <select>
        <option value="maori">Te reo Māori</option>
        <option value="invalid">Not actually a shortcode</option>
        <option value="third">Three</option>
      </select>
      <input type="submit" value="apply" />
      {isEditing && <input type="submit" value="remove" />}
    </form>
  </dialog>
));
