import React from "react";

export default function MinMax(props) {
  return (
    <div>
      <h1 className="MinMax">
        Min/Max: {props.min}°f/{props.max}°f
      </h1>
    </div>
  );
}
