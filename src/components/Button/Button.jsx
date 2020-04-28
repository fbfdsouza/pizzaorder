import React from "react";

const Button = ({ onClick, children, variant }) => {
  return (
    <div>
      <button
        style={{
          margin: "0px 5px",
          width: "25px",
          border: "none",
          backgroundColor: "#fff",
          outline: "none",
          cursor: "pointer",
        }}
        className={variant}
        type="button"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
export default Button;
