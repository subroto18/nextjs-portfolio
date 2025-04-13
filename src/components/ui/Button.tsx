import React from "react";

type buttonProps = {
  className?: string;
  onClick?: () => void;
  text?: string;
  children: React.ReactNode;
};

const Button = ({ className, onClick, children }: buttonProps) => {
  return (
    <button
      className={`px-5 py-2 border border-white text-white rounded  hover:bg-[#f8044d] hover:text-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;
