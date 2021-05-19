import React from "react";

export default function Container(props) {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-evenly",
        width: "100%",
        border: "2px solid black",
        boxSizing: "border-box",
        padding: 20
      }}
    >
      {props.children}
    </div>
  );
}
