import React, { useState } from "react";
import "./Room.css";
function Room() {
  let [isLit, setLit] = useState(false);
  let [age, setAge] = useState(20);
  let [temprature, setTemprature] = useState(22);

  return (
    <div className={`room ${isLit ? "lit" : "dark"}`}>
      This room is {isLit ? "lit" : "dark"}
      <br />
      Current room temprature is {temprature} &deg;C
      <br />
      <br />
      <button onClick={() => setLit(true)}>Switch On</button>
      <br />
      <br />
      <button onClick={() => setLit(false)}>Switch Off</button>
      <br />
      <br />
      <button onClick={() => setLit(!isLit)}>Toggle On/Off</button>
      <br />
      <br />
      <button onClick={() => setTemprature(++temprature)}>
        Increase Temperature
      </button>
      <br />
      <br />
      <button onClick={() => setTemprature(--temprature)}>
        Decrease Temperature
      </button>
    </div>
  );
}

export default Room;
