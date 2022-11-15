import React from 'react';

export default (Field) => (suppliedProps) => {
  const amendedProps = {
    ...suppliedProps
  };
  if (suppliedProps.extraClass) {
    amendedProps.extraClass = suppliedProps.extraClass.split(' ').filter((c) => c !== 'is-invalid').join(' ');
  }
  return <Field {...amendedProps} />;
};
