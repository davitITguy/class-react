import React, { Component } from "react";
import InputStyles from "./InputStyles.module.css";

class Input extends Component {
  render() {
    return (
      <div>
        <input className={InputStyles.input_field} type="text" placeholder="Go To The Gym MAN!" />
        <button className={InputStyles.input_btn}>Add</button>
      </div>
    );
  }
}
export default Input;
