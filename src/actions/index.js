let nextTodoId = 0;
export const addToFavorite = (text) => {
  console.log(text);
  return {
    type: "ADD_TO_FAVORITE",
    id: nextTodoId++,
    text,
  };
};

export const removeFromFavorite = (filter) => ({
  type: "REMOVE_FROM_FAVORITE",
  filter,
});
