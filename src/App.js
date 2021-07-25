import "./App.css";
import React from "react";
import Header from "./Header";
import Form from "./Form";
import Instructions from "./Instructions";
function App() {
  return (
    <>
      <Header />
      <Instructions />
      <div className="center">
        {" "}
        <Form />{" "}
      </div>
    </>
  );
}

export default App;
