import React from "react";

import "./Photos.css";

export default function Photos(props) {
  console.log(props.images);
  if (props.images) {
    return (
      <div className="Photos">
        <div className="row">
          {props.images.map(function (image, index) {
            return (
              <div className="col-4" key={index}>
                <a href={image.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={image.src.landscape}
                    alt="Images Relating to a Specific Word"
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
