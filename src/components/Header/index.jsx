import React, { Component } from "react";
import HeaderStyle from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <div className={HeaderStyle.body}>
        <p>Datos and Lashas To do list</p>
      </div>
    );
  }
}
export default Header;
