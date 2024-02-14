import React from "react";

export default function Weather(props) {
  // This should render a weather description and the image
  // In the image src just put an example for now for styling purposes
  return (
    <div>
      <img src="" alt="" />
      <h1 className="weather">{props.weather}</h1>
    </div>
  );
}
