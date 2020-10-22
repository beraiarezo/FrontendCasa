import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { addToFavorite, removeFromFavorite } from "actions";
import BookBox from "shared/BookBox";
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
            {props.favorites.length > 0 ? (
              props.favorites.map((book, index) => {
                return (
                  <BookBox
                    key={index}
                    book={book}
                    favorites={props.favorites}
                    removeFromFavorite={props.removeFromFavorite}
                    addToFavorite={props.addToFavorite}
                  />
                );
              })
            ) : (
              <div className="not-found-items">
                <h1>Items not found</h1>
              </div>
            )}
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
