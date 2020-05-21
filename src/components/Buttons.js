import React from "react";

const // clearStyle = { background: "#ac3939" },
  // operatorStyle = { background: "#666666" },
  equalsStyle = {
    position: "absolute",
    height: 130,
    bottom: 0,
  };

function Buttons() {
  return (
    <div>
      <button id="clear" className="jumbo">
        AC
      </button>
      <button id="divide">/</button>
      <button id="multiply">x</button>
      <button id="seven">7</button>
      <button id="eight">8</button>
      <button id="nine">9</button>
      <button id="subtract">-</button>
      <button id="four">4</button>
      <button id="five">5</button>
      <button id="six">6</button>
      <button id="add">+</button>
      <button id="one">1</button>
      <button id="two">2</button>
      <button id="three">3</button>
      <button id="zero" className="jumbo">
        0
      </button>
      <button id="decimal">.</button>
      <button id="equals" style={equalsStyle}>
        =
      </button>
    </div>
  );
}

export default Buttons;
