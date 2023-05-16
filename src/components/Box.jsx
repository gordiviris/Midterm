import React from "react";

function Box({ size , children}) {
  let width, height;
  switch (size) {
    case "s":
    case "small":
    case "sm":
      width = "100px";
      height = "100px";
      break;
    case "m":
    case "medium":
    case "md":
      width = "75%";
      height = "150px";
      break;
    case "l":
    case "large":
    case "lg":
      width = "90%";
      break;
    default:
      width = "500px";
      height = "500px";
  }

  return <div style={{ width, height, border: "solid 1px", padding: "10px", display: "inline-block", margin: "10px"}}>{children}</div>;
}

export default Box;