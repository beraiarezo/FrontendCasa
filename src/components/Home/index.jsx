import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "shared/Dropdown";
import Pagination from "shared/Pagination";
import BookService from "services/BookService";
import "./style.scss";
import { connect } from "react-redux";
import { addToFavorite } from "../../actions";
const Home = (props) => {
  console.log(props, "home props");
  const [books, setBooks] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    BookService.getBooks(pageIndex)
      .then(function (response) {
        let nextBooks = [...books, ...response.data.items];
        setBooks(nextBooks);
        setPageIndex(pageIndex + 10);
      })
      .catch(function (error) {
        console.log(error, "error web api");
      });
  };

  const fetchMore = () => {
    fetchBooks();
  };
  console.log(books, "books, ");
  return (
    <>
      <section className="products-view-section">
        <div className="container">
          <div className="products-view-wrapper">
            {books.map((book, index) => {
              return (
                <div className="product" key={index}>
                  <div className="product-image">
                    <a href={`/book/${book.id}`}>
                      <img
                        src={
                          book.volumeInfo.imageLinks
                            ? book.volumeInfo.imageLinks.thumbnail
                            : ""
                        }
                        alt={book.description}
                      />
                    </a>
                  </div>
                  <div className="product-description">
                    <h2 style={{ color: "#4588FF" }}>
                      {book.volumeInfo.title}
                    </h2>
                    <p> {book.volumeInfo.description}</p>
                    <div
                      className="favorite"
                      onClick={() => props.addToFavorite()}
                    >
                      favorite
                    </div>
                    <div className="product-details-btn">Details</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="pagination-section">
        <Pagination loadMore={fetchMore} />
      </section>
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  active: state,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addToFavorite: () => {
    console.log(ownProps, "ownprops");
    dispatch(addToFavorite(ownProps));
  },
  removeFromFavorite: () => {
    console.log("remove from favorite");
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
