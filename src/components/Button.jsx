import React from "react";

function Button({ color, onClick,children}) {
  return (
    <button
      style={{ backgroundColor: color, padding: "10px 20px", borderRadius: "5px", margin: "10px" }}
      onClick={onClick}
    >
        {children}
    </button>
  );
}

export default Button;