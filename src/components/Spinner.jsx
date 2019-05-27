import React from "react";
import spinner from "../spinner.gif";

const style = {
  width: "200px",
  margin: "40px auto",
  display: "block"
};

export default () => {
  return (
    <div>
      <img src={spinner} alt="Loading..." style={style} />
    </div>
  );
};
