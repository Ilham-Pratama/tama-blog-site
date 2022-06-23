import React from 'react';

export interface ButtonProps {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: 'button' | 'submit' | 'reset';
  noStyle?: boolean;
}

const Button = ({ children, onClick, type, noStyle }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="px-5 py-3 rounded-md text-gray-500 border-2 border-gray-200 hover:bg-gray-200 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 transition-colors duration-150"
      {...(noStyle ? { className: '' } : {})}>
      {children}
    </button>
  );
};

export default Button;
