import React from "react";
import "./style.scss";

const Pagination = (props) => {
  return (
    <div className="Pagination">
      <div className="container">
        <div className="paginaton-wrapper" onClick={props.loadMore}>
          <div className="load-more" >LOAD MORE</div>
          {/* <div className="pagination-arrow left first">{"<"}</div>
          <div className="pagination-arrow left previous">{"<"}</div>
          <div className="pagination-page">1</div>
          <div className="pagination-page">2</div>
          <div className="pagination-page">3</div>
          <div className="pagination-page">4</div>
          <div className="pagination-arrow right">{">"}</div> */}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
