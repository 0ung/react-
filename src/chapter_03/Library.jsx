import React from "react";
import Book from "./Book";

const books = {
  파이썬: 200,
  자바: 100,
  스칼라: 300,
  adobe: 400,
  VScode: 500,
  kotiln: 800,
};
function keyExtraction(object1, n) {
  let keys = Object.keys(object1);
  return keys[n];
}

function Library(props) {
  return (
    <div>
      <Book name={`${books}`} numOfPage={`${books.파이썬}`} />
      <Book name="처음 만난 파이썬" numOfPage={`${books.자바}`} />
      <Book name="처음 만난 파이썬" numOfPage={`${books.스칼라}`} />
      <Book name="처음 만난 파이썬" numOfPage={`${books.adobe}`} />
      <Book name="처음 만난 파이썬" numOfPage={`${books.VScode}`} />
      <Book name="처음 만난 파이썬" numOfPage={`${books.kotiln}`} />
    </div>
  );
}

export default Library;
