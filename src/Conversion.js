import React from "react";
import Alert from "react-bootstrap/Alert";
function Conversion(props) {
  return props.submit ? (
    <Alert className="converted">
      {" "}
      {props.changeFrom +
        " " +
        props.amount +
        " = " +
        props.changeTo +
        " " +
        props.convertedAmount}
    </Alert>
  ) : null;
}

export default Conversion;
