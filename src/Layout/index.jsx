import React from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Home from "../components/Home";
import Favorites from "../components/Favorites";
import Details from "../components/Details";
// import ErrorBoundary from "shared/ErrorBoundary"
export const Layout = () => {
  console.log("slug");
  return (
    <>
      {/* <ErrorBoundary> */}
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/book/:id">
          <Details />
        </Route>
      </Switch>
      <Footer />
      {/* </ErrorBoundary> */}
    </>
  );
};
