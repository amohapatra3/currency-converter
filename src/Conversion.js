import React from "react";

function Conversion(props) {
  return props.submit ? (
    <h1>
      {" "}
      {props.changeFrom +
        " " +
        props.amount +
        " = " +
        props.changeTo +
        " " +
        props.convertedAmount}
    </h1>
  ) : null;
}

export default Conversion;