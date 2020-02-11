import React from "react";
import "./style.scss";

interface Props {
  title: string; // this is a mandatory property
  rounded?: boolean; // this is an optional property (may be undefined)
}

const ExampleComponent = (props: Props) => {
  return (
    <div className="ExampleComponent">
    </div>
  );
}
export default ExampleComponent;