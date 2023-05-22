// import React from "react";
import "./App.css";

type PrintTitle = (title: string) => void;

const printTitle: PrintTitle = (title) => {
  console.log(title);
};

printTitle("salami");

// const test: string = "test";

// console.log(test.trim());

function App() {
  return <div className="App">New App!</div>;
}

export default App;
