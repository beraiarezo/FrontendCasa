import React from "react";
import "./style.scss";
import { withRouter } from "react-router";

const Favorites = (props) => {
  console.log(props, "props");
  return (
    <div>
      <h1>detail page</h1>
    </div>
  );
};

export default withRouter(Favorites);
