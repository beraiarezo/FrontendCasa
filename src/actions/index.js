export const addToFavorite = (book) => ({
  type: "ADD_TO_FAVORITE",
  book,
});

export const removeFromFavorite = (bookId) => ({
  type: "REMOVE_FROM_FAVORITE",
  bookId,
});
