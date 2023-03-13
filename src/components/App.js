import React, { useReducer } from "react";
import reducer, { initialState } from "../reducers";
import { applyNumber, changeOperation, clearDisplay, addToMemory, clearMemory } from "../actions";

import "./App.css";

import TotalDisplay from "./TotalDisplay";
import CalcButton from "./CalcButton";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = (value) => {
    if (typeof value === "number") {
      dispatch(applyNumber(value));
    } else if (typeof value === "string") {
      if (value === "*" || value === "+" || value === "-") {
        dispatch(changeOperation(value));
      } else if (value === "CE") {
        dispatch(clearDisplay());
      } else if (value === "M+") {
        dispatch(addToMemory(state.total));
      } else if (value === "MC") {
        dispatch(clearMemory());
      } else if (value === "MR") {
        dispatch(applyNumber(state.memory));
      }
    }
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          {" "}
          Reducer Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={() => handleClick("M+")} />
              <CalcButton value={"MR"} onClick={() => handleClick("MR")} />
              <CalcButton value={"MC"} onClick={() => handleClick("MC")} />
            </div>

            <div className="row">
              <CalcButton
                value={1}
                onClick={() => {
                  handleClick(1);
                }}
              />
              <CalcButton
                value={2}
                onClick={() => {
                  handleClick(2);
                }}
              />
              <CalcButton
                value={3}
                onClick={() => {
                  handleClick(3);
                }}
              />
            </div>

            <div className="row">
              <CalcButton
                value={4}
                onClick={() => {
                  handleClick(4);
                }}
              />
              <CalcButton
                value={5}
                onClick={() => {
                  handleClick(5);
                }}
              />
              <CalcButton
                value={6}
                onClick={() => {
                  handleClick(6);
                }}
              />
            </div>

            <div className="row">
              <CalcButton
                value={7}
                onClick={() => {
                  handleClick(7);
                }}
              />
              <CalcButton
                value={8}
                onClick={() => {
                  handleClick(8);
                }}
              />
              <CalcButton
                value={9}
                onClick={() => {
                  handleClick(9);
                }}
              />
            </div>

            <div className="row">
              <CalcButton
                value={"+"}
                onClick={() => {
                  handleClick("+");
                }}
              />
              <CalcButton
                value={"*"}
                onClick={() => {
                  handleClick("*");
                }}
              />
              <CalcButton
                value={"-"}
                onClick={() => {
                  handleClick("-");
                }}
              />
            </div>

            <div className="row ce_button">
              <CalcButton
                value={"CE"}
                onClick={() => {
                  handleClick("CE");
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
