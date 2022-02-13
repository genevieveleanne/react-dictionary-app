import React from "react";
import Phonetics from "./Phonetics";
import Meanings from "./Meanings";

import "./SearchResults.css";

export default function SearchResults(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="SearchResults">
        <section className="wordAndPronunciation">
          <h3>{props.results.word}</h3>
          <Phonetics phonetics={props.results.phonetics[0]} />
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meanings meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
