import React from "react";
import { Link } from "react-router-dom";
import Button from "shared/Button";
const BookBox = (props) => {
  const { book, favorites } = props;
  return (
    <div className="product">
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
        {favorites.some((fav) => fav.id === book.id) ? (
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
        <Link to={`/book/${book.id}`} className="product-details-btn">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BookBox;
