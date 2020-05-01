import "./style.scss";

import React from "react";

interface Props {
  title: string; // this is a mandatory property
  value: string;
  rounded?: boolean; // this is an optional property (may be undefined)
}

const Button = (props: Props): JSX.Element => {
  return (
    <div className="Button">
      <input type="button" value={props.value}></input>
    </div>
  );
};
export default Button;
