import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";

import "./DictionarySearch.css";

export default function DictionarySearch(props) {
  let [word, setWord] = useState(props.wordOnLoad);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function onLoad() {
    setLoaded(true);
    search();
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  if (loaded) {
    return (
      <div className="DictionarySearch">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a Word"
            onChange={handleWordChange}
          />
          <input type="submit" value="Find" />
        </form>
        <SearchResults results={results} />
      </div>
    );
  } else {
    onLoad();
    return null;
  }
}
