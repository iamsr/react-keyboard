import React, { Component } from "react";
import "./keyboard.css";
import UNDO_ICON from "../src/icons/undo.svg";
import CLOSE_ICON from "../src/icons/close.svg";

class Keyboard extends Component {
  render() {
    return (
      <div className="keyboardContainer">
        <div className="keyboardInputHolder">
          {/* UNDO BUTTON  */}
          <img className="inputIcon" src={UNDO_ICON} alt="undo-icon" />

          {/* INPUT BOX */}
          <div className="inputBox">
          <input type="text" className="inputEditText" />

          {/* INPUT MANUAL */}
          <div className="inputManual">XX/XX max</div>
          
          </div>
          {/* CLOSE ICON */}
          <img className="inputIcon" src={CLOSE_ICON} alt="close-icon" />
        </div>

        <div className="keyboarButtonContainer" />
      </div>
    );
  }
}

export default Keyboard;
