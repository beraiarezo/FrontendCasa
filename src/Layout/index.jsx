import React from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Home } from "../components/Home";
import { AboutUs } from "../components/AboutUs";
import Organization from "../components/Organization";
export const Layout = () => {
  console.log("slug");
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/organization/:slug">
          <Organization />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};
