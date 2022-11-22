import React, { useEffect } from 'react';
import { Button } from 'reactstrap'; // eslint-disable-line import/no-extraneous-dependencies
import { useHotKey } from '../lib/hookHotkeys';

const preventFocusSteal = (event) => event.preventDefault();

/*
The `admin` components Button violoates proptypes by passing `children` to `aria-label` which expects `string`.
So this is a basic recreation of that and the `admin` `IconHOC`, which only modify `className` anyway.
We have some added extras though for our purposes, such as allowing `children` components when `noText`, a default
tabindex, and hot key handling.
*/
export default (props) => {
  const {
    'aria-label': ariaLabel,
    noText,
    icon,
    className = '',
    tabIndex = '-1',
    hotKey,
    onClick,
    ...buttonProps
  } = props;
  const registerHotKey = useHotKey();
  useEffect(() => hotKey && onClick && registerHotKey(hotKey, onClick), [hotKey, onClick]);
  if (noText && !ariaLabel) {
    throw new Error('Cannot create a button with no accessible name. If using `noText`, also specify `aria-label`');
  }
  const classes = {
    icon: `font-icon-${icon}`,
    noText: 'btn--no-text',
  };
  const amendedProps = {
    ...buttonProps,
    className: [
      ...className.split(' '),
      ...Object.keys(classes)
        .filter((trigger) => props[trigger])
        .map((trigger) => classes[trigger])
    ].join(' '),
    tabIndex,
    onClick,
    onMouseDown: preventFocusSteal,
  };
  return (<Button {...amendedProps} aria-label={ariaLabel} />);
};
