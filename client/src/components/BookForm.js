import React, { useState, useEffect } from "react";
import { postRequest, getRequest } from "./Calls";
import BoxItems from "./BoxItems";
import Container from "./Container";

export default function BookForm(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCatagory] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <>
      <form
        style={{ width: "100%" }}
        onSubmit={() =>
          props.handleSubmit({
            name: name,
            price: price,
            category: category,
            author: author
          })
        }
      >
        <Container>
          <BoxItems>
            <label htmlFor='name' name='name'>
              Name
            </label>
            <input
              name='name'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </BoxItems>
          <BoxItems>
            <label htmlFor='price' name='price'>
              Price
            </label>
            <input
              name='price'
              type='number'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </BoxItems>
          <BoxItems>
            <label>Category</label>
            <input
              name='category'
              type='text'
              value={category}
              onChange={(e) => setCatagory(e.target.value)}
            />
          </BoxItems>
          <BoxItems>
            <label>Author</label>
            <input
              name='author'
              type='text'
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </BoxItems>
          <input type='submit' style={{ width: "50%" }} />
        </Container>
      </form>
    </>
  );
}
