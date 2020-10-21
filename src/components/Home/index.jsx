import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Pagination from "shared/Pagination";
import BookService from "services/BookService";
import { addToFavorite, removeFromFavorite } from "actions";
import "./style.scss";

const Home = (props) => {
  const [books, setBooks] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [loader, setLoader] = useState(false);
  const fetchBooks = useCallback(() => {
    setLoader(true);
    BookService.getBooks(pageIndex)
      .then(function (response) {
        setBooks([...books, ...response.data.items]);
        setPageIndex(pageIndex + 10);
        setLoader(false);
      })
      .catch(function (error) {
        console.log(error, "service error");
      });
  }, [books, pageIndex]);

  useEffect(() => {
    return fetchBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMore = () => {
    fetchBooks();
  };

  return (
    <>
      <section className="products-view-section">
        <div className="container">
          <div className="products-view-wrapper">
            {books.map((book, index) => {
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
      <section className="pagination-section">
        <Pagination loadMore={fetchMore} loader={loader} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
