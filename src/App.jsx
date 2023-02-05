import { useState } from "react";
import "./App.css";

const App = () => {
  const [inputvalue, setinputvalue] = useState();
  const input = (event) => {
    setinputvalue(event.target.value);
  };
  const [selectedinvalue, setselectedvalue] = useState("Celsius");
  const selectinput = (event) => {
    setselectedvalue(event.target.value);
  };
  const [selectedoutvalue, setselectedoutvalue] = useState("Fahrenheit");
  const selectoutput = (event) => {
    setselectedoutvalue(event.target.value);
  };
  const [outputvalue, setoutputvalue] = useState();
  const output = () => {
    //celsius
    if (selectedinvalue == "Celsius") {
      if (selectedoutvalue == "Fahrenheit") {
        setoutputvalue(((Number(inputvalue) * 9) / 5 + 32).toFixed(2));
      } else if (selectedoutvalue == "Celsius") {
        setoutputvalue(inputvalue);
      } else if (selectedoutvalue == "Kelvin") {
        setoutputvalue((Number(inputvalue) + 273.15).toFixed(2));
      }
    }
    // //Fahrenheit
    else if (selectedinvalue == "Fahrenheit") {
      if (selectedoutvalue == "Fahrenheit") {
        setoutputvalue(inputvalue);
      } else if (selectedoutvalue == "Celsius") {
        setoutputvalue(((Number(inputvalue) - 32) * (5 / 9)).toFixed(3));
      } else if (selectedoutvalue == "Kelvin") {
        setoutputvalue(((inputvalue - 32) * (5 / 9) + 273.15).toFixed(3));
      }
    }
    // //kelvin
    else if (selectedinvalue == "Kelvin") {
      if (selectedoutvalue == "Fahrenheit") {
        setoutputvalue(((inputvalue - 273.15) * (9 / 5) + 32).toFixed(3));
      } else if (selectedoutvalue == "Celsius") {
        setoutputvalue((inputvalue - 273.15).toFixed(3));
      } else if (selectedoutvalue == "Kelvin") {
        setoutputvalue(inputvalue);
      }
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
        <div className="cont-top">
          <div className="input-box">
            <input type="text" onInput={input} value={inputvalue} />
          </div>
          <div className="bottom-text">
            <select id="input" onClick={selectinput}>
              <option>Celsius</option>
              <option>Fahrenheit</option>
              <option>Kelvin</option>
            </select>
          </div>
        </div>
        <div className="operator">=</div>
        <div className="cont-bottom">
          <div className="input-box">
            <input type="text" value={outputvalue} />
          </div>
          <div className="bottom-text">
            <select id="output" onClick={selectoutput}>
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
