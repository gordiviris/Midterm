import React from "react";

function Text({ size, color, children}) {
  let fontSize;
  switch (size) {
    case "small":
      fontSize = "10px";
      break;
    case "medium":
      fontSize = "20px";
      break;
    case "large":
      fontSize = "30px";
      break;
    default:
      fontSize = "12px";
  }

  return <p style={{ fontSize, color }}>{children}</p>;
}

export default Text;