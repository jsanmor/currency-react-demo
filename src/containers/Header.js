import React, { Component } from "react";
import logo from "../assets/logo.svg";

export default class Footer extends Component {
  render() {
    return (
      <header className="header">
        <img src={logo} className="header__logo" alt="logo" />
      </header>
    );
  }
}
