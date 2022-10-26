import React, { forwardRef } from 'react';

export default forwardRef((props, ref) => (
  <dialog ref={ref}>
    <form method="dialog">
      <select>
        <option value="maori">Te reo Māori</option>
        <option value="invalid">Not actually a shortcode</option>
      </select>
      <input type="submit" value="apply" />
      <input type="submit" value="remove" />
    </form>
  </dialog>
));
