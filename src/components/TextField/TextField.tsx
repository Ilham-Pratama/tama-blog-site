import React from 'react';

export interface TextFieldProps {
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  textarea?: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

const TextField = ({
  name,
  type,
  placeholder,
  required,
  textarea,
  onChange
}: TextFieldProps) => {
  if (textarea) {
    return (
      <textarea
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={e => onChange && onChange(e)}
        className="outline-none w-full p-4 rounded-md bg-gray-200 placeholder:text-gray-400 dark:bg-slate-700 dark:text-slate-100 border-slate-300"
        rows={4}
      />
    );
  }
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      onChange={e => onChange && onChange(e)}
      className="outline-none w-full p-4 rounded-md bg-gray-200 placeholder:text-gray-400 dark:bg-slate-700 dark:text-slate-100 border-slate-300"
    />
  );
};

export default TextField;
