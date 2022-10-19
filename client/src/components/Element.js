import React, { useCallback } from 'react';
import { Element as SlateElement } from 'slate';
import { DefaultElement } from 'slate-react';
import ShortcodeElement from './ShortcodeElement';

export const Element = (elementProps) => (
  SlateElement.isElementType(elementProps, 'shortcode')
    ? <ShortcodeElement {...elementProps} />
    : <DefaultElement {...elementProps} />
);

export default useCallback(Element, []);
