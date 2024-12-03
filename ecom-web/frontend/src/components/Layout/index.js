import React from "react";
import Header from "../Header";

const layout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default layout;
