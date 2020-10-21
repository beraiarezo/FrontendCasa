import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { addToFavorite, removeFromFavorite } from "actions";

import "./style.scss";

const Favorites = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="products-view-section">
        <div className="container">
          <div className="products-view-wrapper">
            {props.favorites.map((book, index) => {
              return (
                <div className="product" key={index}>
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
                        <h4>by</h4>
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
                    ) : (
                      <p>{book.volumeInfo.subtitle}</p>
                    )}
                    <p> {book.volumeInfo.description}</p>
                    {props.favorites.some((fav) => fav.id === book.id) ? (
                      <div
                        className="favorite"
                        onClick={() => props.removeFromFavorite(book.id)}
                      >
                        remove from favorite
                      </div>
                    ) : (
                      <div
                        className="favorite"
                        onClick={() => props.addToFavorite(book)}
                      >
                        add to favorite
                      </div>
                    )}
                    <Link
                      to={`/book/${book.id}`}
                      className="product-details-btn"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
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
  connect(mapStateToProps, mapDispatchToProps)(Favorites)
);
