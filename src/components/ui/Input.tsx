import React from "react";

type inputProps = {
  type?: string;
  placeholder?: string;
  onChange?: () => void;
  className?: string;
  required?: boolean;
};

const Input = ({
  type,
  placeholder,
  onChange,
  className,
  required,
}: inputProps) => {
  return (
    <input
      required={required}
      type={type ? type : "text"}
      placeholder={placeholder ? placeholder : "Enter"}
      className={`w-full px-4 py-2  border-2 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-0  border-[#474747]  ${className}`}
    />
  );
};

export default Input;
