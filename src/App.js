import React, { Component } from "react";
import "./App.css";
// Components
import Formula from "./components/Formula";
import Output from "./components/Output";
import Buttons from "./components/Buttons";

//vars
const isOperator = /[x/+‑]/,
  endsWithOperator = /[x+‑/]$/,
  endsWithNegativeSign = /[x/+]‑$/;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVal: "0",
      prevVal: "0",
      formula: "",
      // currentSign: "pos",
      lastClicked: "",
      evaluated: false,
    };
  }

  maxDigitWarning = () => {
    this.setState({
      currentVal: "Max Digit Limit",
      prevVal: this.state.currentVal,
    });
    setTimeout(() => this.setState({ currentVal: this.state.prevVal }), 1000);
  };

  reset = () => {
    this.setState({
      currentVal: "0",
      prevVal: "0",
      formula: "",
      // currentSign: "pos",
      lastClicked: "",
      evaluated: false,
    });
  };

  render() {
    return (
      <div>
        <div className="calculator">
          <Output currentValue={this.state.currentVal} />
          <Formula formula={this.state.formula} />
          <Buttons />
        </div>
      </div>
    );
  }
}

export default App;
