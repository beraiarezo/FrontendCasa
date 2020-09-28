import React from "react";
import OutsideClickHandler from "../OutSideClickHandler";

import "./index.scss";
const Dropdown = () => {
  let { ref, isComponentVisible, setIsComponentVisible } = OutsideClickHandler(
    false
  );

  return (
    <div className="dropdown" onClick={() => setIsComponentVisible(true)}>
      <div className="dropdown-placeholder">Choose country</div>
      <div
        className={`${isComponentVisible ? "show-menu" : ""} dropdown-menu`}
        ref={ref}
      >
        <div className="search-bar">
          <input type="text" placeholder="Search country" />
        </div>
        <div className="dropdown-options-wrapper">
          <div className="dropdown-option">Germany</div>
          <div className="dropdown-option">Germany</div>
          <div className="dropdown-option selected">Germany</div>
          <div className="dropdown-option">Germany</div>
          <div className="dropdown-option">Germany</div>
          <div className="dropdown-option">Germany</div>
          <div className="dropdown-option">Germany</div>
          <div className="dropdown-option">Germany</div>
          <div className="dropdown-option">Germany</div>
          <div className="dropdown-option">Germany</div>
          <div className="dropdown-option">Germany</div>
          <div className="dropdown-option">Germany</div>
          <div className="dropdown-option">Germany</div>
          <div className="dropdown-option">Germany</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
