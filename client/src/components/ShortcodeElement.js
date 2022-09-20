import React from 'react';
import { useFocused, useSelected } from 'slate-react';

const ShortcodeElement = ({ element: { shortcode, attributes: shortcodeAttributes = {}, selfclosing = '' }, attributes, children }) => {
  const selected = useSelected();
  const focused = useFocused();
  const selectedClass = selfclosing && selected && focused ? ' shortcode--selected' : '';
  return (
    <span
      className={`shortcode shortcode--type-${shortcode}${selfclosing && ' shortcode--selfclosing'}${selectedClass}`}
      data-shortcode={shortcode}
      {...Object.keys(shortcodeAttributes).reduce((c,i)=>({...c,[`data-attribute-${i}`]:shortcodeAttributes[i]}), {})}
      {...attributes}
    >
      {children}
    </span>
  );
};

export default ShortcodeElement;
