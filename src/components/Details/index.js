import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import BookService from "services/BookService";
import { addToFavorite, removeFromFavorite } from "actions";
import Button from "shared/Button";
import "./index.scss";
const Details = (props) => {
  const [book, setBook] = useState();
  const fetchBooks = () => {
    BookService.get(props.match.params.id)
      .then(function (response) {
        setBook(response.data);
      })
      .catch(function (error) {
        console.log(error, "error web api");
      });
  };
  useEffect(() => {
    fetchBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="produc-detail-wrapper">
      {book ? (
        <div className="container">
          <div className="product">
            <div className="product-header">
              <div className="product-image">
                <Link to={`/book/${book.id}`}>
                  <img
                    src={
                      book.volumeInfo.imageLinks
                        ? book.volumeInfo.imageLinks.thumbnail
                        : ""
                    }
                    alt={book.description}
                  />
                </Link>
              </div>
              <div className="product-description">
                <h2>{book.volumeInfo.title}</h2>
                {book.volumeInfo.authors ? (
                  <>
                    <h3>
                      {book.volumeInfo.authors
                        ? book.volumeInfo.authors.map((author, index) =>
                            book.volumeInfo.authors.length < 2 ||
                            book.volumeInfo.authors.length === index + 1
                              ? `${author}`
                              : `${author}, `
                          )
                        : ""}
                    </h3>
                  </>
                ) : null}
                {book.volumeInfo.categories ? (
                  <>
                    <p className="product-categories">
                      {book.volumeInfo.categories
                        ? book.volumeInfo.categories.map((category, index) =>
                            book.volumeInfo.categories.length < 2 ||
                            book.volumeInfo.categories.length === index + 1
                              ? `${category}`
                              : `${category} | `
                          )
                        : ""}
                    </p>
                  </>
                ) : null}
                <p>{book.volumeInfo.subtitle}</p>
                <p>
                  {book.volumeInfo.publishedDate ? (
                    <>
                      <b>Published date:</b> {book.volumeInfo.publishedDate}
                    </>
                  ) : (
                    ""
                  )}
                  <br />
                  {book.volumeInfo.publisher ? (
                    <>
                      <b>Publisher:</b> {book.volumeInfo.publisher}
                    </>
                  ) : (
                    ""
                  )}
                </p>
                {props.favorites.some((fav) => fav.id === book.id) ? (
                  <Button
                    className="favorite selected"
                    action={() => props.removeFromFavorite(book.id)}
                  />
                ) : (
                  <Button
                    className="favorite"
                    action={() => props.addToFavorite(book)}
                  />
                )}
              </div>
            </div>

            <div>
              <div className="anotation">
                <p>Annotation</p>
              </div>
              <div
                className="book-description-wrapper"
                dangerouslySetInnerHTML={{
                  __html: book.volumeInfo.description,
                }}
              ></div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  favorites: state.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  addToFavorite: (book) => {
    dispatch(addToFavorite(book));
  },
  removeFromFavorite: (bookId) => {
    dispatch(removeFromFavorite(bookId));
  },
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Details)
);
