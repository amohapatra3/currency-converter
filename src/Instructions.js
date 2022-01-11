import React from "react";

function Instructions() {
  return (
    <>
      <h2>Instructions for using this currency converter:</h2>
      <p>
        To use this currency converter, please enter the amount in the currency
        you wish to convert from. Then from the dropdown menus, please select
        the{" "}
        <a href="https://www.exchangerate-api.com/docs/supported-currencies">
          three letter currency code
        </a>
        {""} of the currency to convert from and currency to convert to.
      </p>
    </>
  );
}

export default Instructions;
