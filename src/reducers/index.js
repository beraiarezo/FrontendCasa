const initialState = {
  favorites: [],
};

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return Object.assign({}, state, {
        favorites: [...state.favorites, action.book],
      });
    case "REMOVE_FROM_FAVORITE":
      let favs = state.favorites.filter((fav) => {
        return fav.id !== action.bookId;
      });
      return Object.assign({}, state, {
        favorites: [...favs],
      });
    default:
      return state;
  }
};

export default favorites;
