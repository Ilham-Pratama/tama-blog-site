import React from 'react';

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

const Text = ({ children, className = '' }: TextProps) => {
  return (
    <p className={`text-gray-700 dark:text-slate-100 ${className}`}>
      {children}
    </p>
  );
};

export default Text;
