import React, { useState, useEffect } from "react";
import { postRequest, getRequest } from "./Calls";

export default function BookForm({ props }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCatagory] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = function(e) {
    e.preventDefault();

    let action = function(res) {
      setName("");
      setPrice("");
      setCatagory("");
      setAuthor("");
    };
    postRequest(
      "https://localhost:5001/api/books",
      { Name: name, Price: price, Category: category, Author: author },
      action
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name' name='name'>
          Name
        </label>
        <input
          name='name'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor='price' name='price'>
          Price
        </label>
        <input
          name='price'
          type='number'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label>Category</label>
        <input
          name='category'
          type='text'
          value={category}
          onChange={(e) => setCatagory(e.target.value)}
        />
        <label>Author</label>
        <input
          name='author'
          type='text'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input type='submit' />
      </form>
    </>
  );
}
