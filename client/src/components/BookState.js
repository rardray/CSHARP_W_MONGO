import React, { useState, useEffect } from "react";
import { getRequest, postRequest } from "./Calls";
import Container from "./Container";
import BookList from "./BookList";
import BookForm from "./BookForm";

export default function BookState(props) {
  const [books, setBooks] = useState([]);
  const [bookForm, setBookForm] = useState([]);

  useEffect(() => {
    const action = function(res) {
      setBooks(res.data);
    };
    getRequest("https://localhost:5001/api/books", action);
  }, [bookForm]);

  const handleSubmit = function(data) {
    const action = function(res) {
      setBookForm(res.data);
    };
    postRequest(
      "https://localhost:5001/api/books",
      {
        Name: data.name,
        Price: data.price,
        Category: data.category,
        Author: data.author
      },
      action
    );
  };
  return (
    <>
      <Container>
        <BookList books={books} />
      </Container>
      <BookForm handleSubmit={handleSubmit} />
    </>
  );
}
