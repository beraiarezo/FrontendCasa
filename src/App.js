import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "./Layout";
import favorites from "./reducers/index";
import "./App.css";

// const store = createStore(todos, applyMiddleware(thunk));
const store = createStore(
  favorites,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout />
      </Router>
    </Provider>
  );
}

export default App;
