import React, { useEffect, useState, useCallback } from "react";
import { connect } from "react-redux";
import Pagination from "shared/Pagination";
import BookService from "services/BookService";
import BookBox from "shared/BookBox";
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
                <BookBox
                  key={index}
                  book={book}
                  favorites={props.favorites}
                  removeFromFavorite={props.removeFromFavorite}
                  addToFavorite={props.addToFavorite}
                />
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
