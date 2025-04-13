import React from "react";
type TextAreaProps = {
  type?: string;
  placeholder?: string;
  onChange?: () => void;
  className?: string;
  required?: boolean;
  row?: number;
};

const TextArea = ({
  placeholder,
  onChange,
  className,
  required,
  row,
}: TextAreaProps) => {
  return (
    <textarea
      required={required}
      rows={row ? row : 4}
      placeholder={placeholder}
      className={`w-full px-4 py-2  border-2 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-0  border-[#474747]  ${className}`}
    ></textarea>
  );
};

export default TextArea;
