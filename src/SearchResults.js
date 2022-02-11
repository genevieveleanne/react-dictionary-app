import React from "react";
import Phonetics from "./Phonetics";
import Meanings from "./Meanings";

export default function SearchResults(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="SearchResults">
        <h2>{props.results.word}</h2>
        <Phonetics phonetics={props.results.phonetics[0]} />
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
