const favorites = (state = [], action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case "REMOVE_BOOK":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default favorites;
