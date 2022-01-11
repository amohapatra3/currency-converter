import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Conversion from "./Conversion";
const API_KEY = "f08725edef39eafa2ef31749";
const url = "https://v6.exchangerate-api.com/v6/" + API_KEY + "/latest/USD";
function InputForm() {
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
    <div className="center">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Text> Amount to convert: </Form.Text>
          <Form.Control
            type="text"
            value={values.amount}
            onChange={setAmount}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Text> Currency to convert from: </Form.Text>
          <Form.Select
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
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Text> Currency to convert to </Form.Text>
          <Form.Select
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
          </Form.Select>
        </Form.Group>
        <br />
        <Button variant="outline-primary" type="submit">
          Convert
        </Button>
      </Form>
      <Conversion
        changeFrom={values.changeFrom}
        amount={values.amount}
        changeTo={values.changeTo}
        submit={submit}
        convertedAmount={convertedAmount}
      />
    </div>
  );
}

export default InputForm;
