import "./App.css";
import React from "react";
import Header from "./Header";
import InputForm from "./InputForm";
import Instructions from "./Instructions";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Header className="font" />
      <Instructions className="font" /> <InputForm />{" "}
    </>
  );
}

export default App;
