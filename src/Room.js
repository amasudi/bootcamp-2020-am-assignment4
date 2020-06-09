import React, { useState } from "react";
import "./Room.css";
function Room() {
  let [isLit, setLit] = useState(false);
  let [age, setAge] = useState(25);
  let [name, setName] = useState("Anees");
  let [temprature, setTemprature] = useState(22);
  const showAge = (name, age) => {
    setAge(age);
    setName(name);
  };
  return (
    <div className={`room ${isLit ? "lit" : "dark"}`}>
      This room is {isLit ? "lit" : "dark"}
      <br />
      Current room temprature is {temprature} &deg;C
      <br />
      Age of {name} is {age}
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
      <br />
      <br />
      <button onClick={showAge.bind(this, "Anees", 25)}>Show my Age</button>
      <br />
      <button onClick={showAge.bind(this, "Zeeshan bhai", 22)}>
        Show Zeeshan bhai's Age
      </button>
    </div>
  );
}

export default Room;
