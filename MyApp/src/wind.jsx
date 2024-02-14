import React from "react";

export default function Wind(props) {
  return (
    <div>
      <h1 className="wind">wind speed: {props.wind} m/s</h1>
    </div>
  );
}
