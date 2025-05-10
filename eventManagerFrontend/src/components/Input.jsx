import React from "react";

const Input = ({ children, title }) => {
  return (
    <div className="input-wrapper">
      <p>{title}</p>
      {children}
    </div>
  );
};

export default Input;
