import React from "react";

const Button = (props) => {
  return (
    <div className={props.className} onClick={props.action}>
      {props.children}
    </div>
  );
};

export default Button;
