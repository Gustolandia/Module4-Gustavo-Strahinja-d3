import React from 'react';
import AlertDanger from "./components/alert";
import SingleBook from "./components/SingleBook";
import MyBadge from './components/MyBadge';
import BookList from './components/BookList'

let books = require("./components/data/fantasy.json");
console.log(books);

function App() {
  return (
  <>
      <SingleBook book={books[0]}/>
      <AlertDanger text="This is the warning"/>
      <MyBadge text='My Badge text' color="primary" />
      <BookList books={books}/>
   </>
  );
}

export default App;
