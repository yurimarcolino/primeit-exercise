import React from 'react';

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  htmlFor: string;
};

export function Label({ htmlFor, children, ...rest }: LabelProps) {
  return <label className="text-white text-lg" htmlFor={htmlFor} {...rest}>{children}</label>;
};
