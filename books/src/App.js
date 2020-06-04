import React from 'react';
import AlertDanger from "./components/alert";
import SingleBook from "./components/SingleBook";



let books = require("./components/data/fantasy.json");
console.log(books);

function App() {
  return (
    <>
      <SingleBook book={books[0]}/>
      <AlertDanger text="This is the warning"/>
    </>
  );
}

export default App;
