import React, { useState } from "react";
import axios from "axios";

import "./DictionarySearch.css";

export default function DictionarySearch() {
  let [word, setWord] = useState("");

  function searchForWord(event) {
    event.preventDefault();
    alert(`Searching for definition of ${word}`);
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  return (
    <div className="DictionarySearch">
      <form onSubmit={searchForWord}>
        <input
          type="search"
          placeholder="Enter a Word"
          onChange={handleWordChange}
        />
        <input type="submit" value="Find" />
      </form>
    </div>
  );
}
