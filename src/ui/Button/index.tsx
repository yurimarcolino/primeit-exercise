import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="px-4 py-2 text-white bg-slate-600 rounded hover:bg-slate-600/80"
      {...rest}
    >
      {children}
    </button>
  )
};
