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
      <section className="DictionarySearch">
        <h2>Learn a new word today!</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="searchBar"
            type="search"
            placeholder="Suggested words: song, love, ocean, shine..."
            onChange={handleWordChange}
          />
          <input className="searchButton" type="submit" value="Find" />
        </form>
        <SearchResults results={results} />
      </section>
    );
  } else {
    onLoad();
    return null;
  }
}
