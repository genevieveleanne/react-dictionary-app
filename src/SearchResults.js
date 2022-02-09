import React from "react";

export default function SearchResults(props) {
  console.log(props.results);

  if (props.results) {
    return (
      <div className="SearchResults">
        <h2>{props.results.word}</h2>
      </div>
    );
  } else {
    return null;
  }
}
