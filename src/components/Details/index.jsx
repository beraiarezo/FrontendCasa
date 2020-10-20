import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import BookService from "services/BookService";

const Details = (props) => {
  const [book, setBook] = useState();
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    BookService.get(props.match.params.id)
      .then(function (response) {
        console.log(response, "response");
        setBook(response.data);
      })
      .catch(function (error) {
        console.log(error, "error web api");
      });
  };

  console.log(props, "props details", book);
  return (
    <div>
      <h1>Book Detail</h1>
      {book ? <h1>hello</h1> : ""}
    </div>
  );
};

export default withRouter(Details);
