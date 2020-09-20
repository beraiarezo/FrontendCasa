import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Home } from "../components/Home";
export const Layout = () => {
  console.log("slug");
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/blog/:slug">
          <h1>blog,</h1>
        </Route>
      </Switch>
      <Footer />
    </>
  );
};
