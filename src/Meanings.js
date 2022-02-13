import React from "react";
import Synonyms from "./Synonyms";

import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong>
              {definition.definition}
              <br />
              <em>{definition.example}</em>
            </p>

            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
