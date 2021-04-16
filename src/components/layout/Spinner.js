import React, { Component } from "react";
import Spin from "./spinner.gif";
export class Spinner extends Component {
  render() {
    return (
      <>
        <img
          src={Spin}
          alt="load"
          style={{ width: "200px", margin: "auto", display: "block" }}
        />
      </>
    );
  }
}

export default Spinner;
