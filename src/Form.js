import React, { useState, useEffect } from "react";
import axios from "axios";
import Conversion from "./Conversion";
const API_KEY = "f08725edef39eafa2ef31749";
const url = "https://v6.exchangerate-api.com/v6/" + API_KEY + "/latest/USD";
function Form() {
  const [countries, setCountries] = useState({});
  const [values, setValues] = useState({
    changeFrom: " ",
    changeTo: " ",
    amount: "",
  });
  const [submit, setSubmit] = useState(false);
  const [convertedAmount, setConvertedAmount] = useState();
  useEffect(() => {
    axios
      .get(url)
      .then((response) => setCountries(response.data.conversion_rates))
      .catch((error) => console.error(error));
  }, []);
  let countryList = [];
  for (let x in countries) {
    countryList.push(
      <option value={x} key={x}>
        {x}
      </option>
    );
  }
  const convertCurrency =
    "https://v6.exchangerate-api.com/v6/" +
    API_KEY +
    "pair/" +
    values.changeFrom +
    "/" +
    values.changeTo +
    "/" +
    values.amount;
  useEffect(() => {
    axios
      .get(convertCurrency)
      .then((response) => setConvertedAmount(response.data.conversion_result))
      .catch((error) => console.error(error));
  }, [values.changeFrom, values.changeTo, values.amount, convertCurrency]);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmit(true);
  }

  function setAmount(event) {
    event.persist();
    setValues({
      ...values,
      amount: event.target.value,
    });
  }

  function setChangeFrom(event) {
    event.persist();
    setValues({
      ...values,
      changeFrom: event.target.value,
    });
  }

  function setChangeTo(event) {
    event.persist();
    setValues({
      ...values,
      changeTo: event.target.value,
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label> Amount to convert </label>
        <input type="text" value={values.amount} onChange={setAmount}></input>
        <label> Currency to convert from </label>
        <select
          name="changeFrom"
          value={values.changeFrom}
          placeholder="currency from"
          onChange={setChangeFrom}
          required
          aria-invalid="false"
        >
          <option value="" selected>
            Please Select
          </option>
          {countryList}
        </select>
        <label> Currency to convert to </label>
        <select
          name="changeTo"
          value={values.changeTo}
          onChange={setChangeTo}
          required
          aria-invalid="false"
        >
          <option value="" selected>
            Please Select
          </option>
          {countryList}
        </select>
        <button className="convertButton"> Convert</button>
      </form>
      <Conversion
        changeFrom={values.changeFrom}
        amount={values.amount}
        changeTo={values.changeTo}
        submit={submit}
        convertedAmount={convertedAmount}
      />
    </>
  );
}

export default Form;
