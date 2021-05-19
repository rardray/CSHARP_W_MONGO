import React from "react";

export default function BoxItems(props) {
  return (
    <div
      style={{
        boxSizing: "border-box",
        display: "inline-block",
        width: "45%",
        padding: 6
      }}
    >
      {props.children}
    </div>
  );
}
