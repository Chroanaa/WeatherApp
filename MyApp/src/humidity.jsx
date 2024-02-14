import React from "react";

export default function Humidity(props) {
  return (
    <div>
      <h1 className="humididy">Humidity: {props.humidity}%</h1>
    </div>
  );
}
