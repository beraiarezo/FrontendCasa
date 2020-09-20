import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Layout } from "./Layout";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
