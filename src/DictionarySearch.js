import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import Photos from "./Photos";

import "./DictionarySearch.css";

export default function DictionarySearch(props) {
  let [word, setWord] = useState(props.wordOnLoad);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [images, setImages] = useState(null);

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
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f917000010000010ca893f3bca44d4cad4f1051dccde52e";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setImages(response.data.photos);
  }

  if (loaded) {
    return (
      <section className="DictionarySearch">
        <h2>Learn a new word today!</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="searchBar"
            type="search"
            placeholder="Suggested words: love, ocean, shine..."
            onChange={handleWordChange}
          />
        </form>
        <SearchResults results={results} />
        <Photos images={images} />
      </section>
    );
  } else {
    onLoad();
    return null;
  }
}
