import React from 'react';
import { Element as SlateElement } from 'slate';
import { DefaultElement } from 'slate-react';
import ShortcodeElement from 'components/ShortcodeElement';

export default (elementProps) => (
  SlateElement.isElementType(elementProps.element, 'shortcode')
    ? <ShortcodeElement {...elementProps} />
    : <DefaultElement {...elementProps} />
);
