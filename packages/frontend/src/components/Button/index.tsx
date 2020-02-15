import React from "react";
import "./style.scss";

interface Props {
  title: string; // this is a mandatory property
  value: string;
  rounded?: boolean; // this is an optional property (may be undefined)
}

const Button = (props: Props) => {
  
  return (
    <div className="Button">
      <input type= 'button' value ={props.value}></input>
    </div>
  );
}
export default Button;