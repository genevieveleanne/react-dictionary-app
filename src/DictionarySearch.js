import React, { useState } from "react";
import axios from "axios";

import "./DictionarySearch.css";

export default function DictionarySearch() {
  let [word, setWord] = useState("");

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  function searchForWord(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
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
