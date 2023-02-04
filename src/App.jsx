import { useState } from "react";
import "./App.css";

const App = () => {
  const [inputvalue, setinputvalue] = useState();
  const input = (event) => {
    setinputvalue(event.target.value);
  };
  const [outputvalue, setoutputvalue] = useState();
  const output = () => {
    const input = document.getElementById("input");
    const output = document.getElementById("output");
    //celsius
    if (input.value == "Celsius" && output.value == "Fahrenheit") {
      setoutputvalue(((Number(inputvalue) * 9) / 5 + 32).toFixed(2));
    } else if (input.value == "Celsius" && output.value == "Celsius") {
      setoutputvalue(inputvalue);
    } else if (input.value == "Celsius" && output.value == "Kelvin") {
      setoutputvalue((Number(inputvalue) + 273.15).toFixed(2));
    }
    // //Fahrenheit
    else if (input.value == "Fahrenheit" && output.value == "Fahrenheit") {
      setoutputvalue(inputvalue);
    } else if (input.value == "Fahrenheit" && output.value == "Celsius") {
      setoutputvalue(((Number(inputvalue) - 32) * (5 / 9)).toFixed(3));
    } else if (input.value == "Fahrenheit" && output.value == "Kelvin") {
      setoutputvalue(((inputvalue - 32) * (5 / 9) + 273.15).toFixed(3));
    }
    // //kelvin
    else if (input.value == "Kelvin" && output.value == "Fahrenheit") {
      setoutputvalue(((inputvalue - 273.15) * (9 / 5) + 32).toFixed(3));
    } else if (input.value == "Kelvin" && output.value == "Celsius") {
      setoutputvalue((inputvalue - 273.15).toFixed(3));
    } else {
      setoutputvalue(inputvalue);
    }
  };
  const refresh = () => {
    setinputvalue("");
    setoutputvalue("");
  };
  return (
    <div className="App">
      <div className="king-container">
        <div className="heading">Temperature</div>
        <div className="degree">
          <div className="input-box">
            <input type="text" onInput={input} value={inputvalue} />
          </div>
          <div className="bottom-text">
            <select id="input">
              <option>Celsius</option>
              <option>Fahrenheit</option>
              <option>Kelvin</option>
            </select>
          </div>
        </div>
        <div className="operator">=</div>
        <div className="fahrenheit">
          <div className="input-box">
            <input type="text" value={outputvalue} />
          </div>
          <div className="bottom-text">
            <select id="output">
              <option>Fahrenheit</option>
              <option>Celsius</option>
              <option>Kelvin</option>
            </select>
          </div>
        </div>
        <div className="conv-button">
          <button onClick={output} id="button-1">
            convert
          </button>
          <button onClick={refresh} id="button-2">
            ⟳
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
