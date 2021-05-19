import React from "react";
import BoxItems from "./BoxItems";

export default function BookList(props) {
  return (
    <>
      {props.books.map((el, i) => {
        return (
          <BoxItems>
            <div>Title: {el.Name}</div>
            <div>Price: {el.Price}usd</div>
            <div>Category: {el.Category}</div>
            <div>Author: {el.Author}</div>
          </BoxItems>
        );
      })}
    </>
  );
}
