import { useState } from "react";
import logo from "./logo.svg";
import React from "react";
import "./Custom.css";
import "./App.css";

function App() {
  let InputVal = React.createRef();
  const [arr, setArr] = useState([]);
  let add = (e) => {
    // Method 1
    setArr( arr => [...arr, `${InputVal.current.value}`]);
    // Method 2
    // const newArr = [...arr];
    // newArr.splice(1,e, InputVal.current.value);
    // setArr(newArr);
  };
  let update = (e) => {

  };
  let remove = (i) => {
    const arrRemove = [...arr];
    console.log(arrRemove);
    arrRemove.splice(i, 1); 
    setArr(arrRemove);
    console.log(arrRemove);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
        <div className="d-flex">
          <input className="form-control" id="appendtoarray" placeholder="Enter text" ref={InputVal} autoComplete="off"/>
          <button className="btn btn-primary" onClick={add}>Add</button>
        </div>
        <ul>
          {arr.map((val, i) => { 
            return <li className="mb-2"  key={i}>
                <div className="d-flex">
                  <input className="form-control mb-2" defaultValue={val} autoComplete="off" onChange={update(i)} />
                  <button className="btn btn-primary" onClick={update}>Update</button>
                  <button className="btn btn-primary" onClick={() => remove(i) }>Remove</button>
                </div>
              </li>;
          })}
        </ul>

      </header>
    </div>
  );
}

export default App;