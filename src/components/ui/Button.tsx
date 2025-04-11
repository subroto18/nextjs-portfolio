import React from "react";

type buttonProps = {
  className?: string;
  onClick?: () => void;
  text: string;
};

const Button = ({ className, onClick, text }: buttonProps) => {
  return (
    <button
      className={`px-5 py-2 border border-white text-white bg-transparent rounded transition-all duration-300 hover:bg-[#f8044d] hover:text-white hover:-translate-y-1 hover:shadow-lg ${className} `}
    >
      {text}
    </button>
  );
};

export default Button;
