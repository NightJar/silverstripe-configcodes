import React from 'react';

/**
 * Intended to be used between silverstripe-admin FieldHolder component and a form field (e.g. TextField or Input)
 * Will remove extra props that are otherwise passed down and could be rendered on DOM elements, issuing warnings
 * from React (in the case of wrapping reactstrap Input).
 *
 * A FieldHolder Message is seemingly used only to describe validation errors - but in Silverstripe PHP this can carry
 * many different types of message (although shouldn't be confused with the description property on both PHP & JS).
 * The invalid state is removed as this application is concerned primarily with informative text that is transient with
 * state - as opposed to description that is permenant and provides expanded information on the field's purpose beyond
 * the label.
 */
export default (Field) => (suppliedProps) => {
  const fieldHolderSpecificProps = [
    'extraClass',
    'leftTitle',
    'rightTitle',
    'description',
    'hideLabels',
    'noHolder',
    'message',
    'data'
  ];
  const amendedProps = Object.keys(suppliedProps)
    .filter((propName) => !fieldHolderSpecificProps.includes(propName))
    .reduce((domSafeProps, prop) => ({ ...domSafeProps, [prop]: suppliedProps[prop] }), {});

  if (suppliedProps.extraClass) {
    amendedProps.className = amendedProps.className
      .split(' ')
      .concat(
        suppliedProps.extraClass.split(' ').filter((c) => c !== 'is-invalid')
      )
      .join(' ');
  }

  return <Field {...amendedProps} />;
};
