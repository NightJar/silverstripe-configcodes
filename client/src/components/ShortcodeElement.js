import React from 'react';

const ShortcodeElement = ({ element: { shortcode }, attributes, children }) => (
  <span
    className={`shortcode shortcode--${shortcode}`}
    data-shortcode={shortcode}
    {...attributes}
  >
    {children}
  </span>
);

export default ShortcodeElement;
