import React from "react";

const Button = ({ onClick, children, variant }) => {
  return (
    <button className={variant} type="button" onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
