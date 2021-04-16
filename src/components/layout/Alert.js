import React, { Component } from "react";

export class Alert extends Component {
  render() {
    if (this.props.alert === true) {
      return (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          Please Fill The Form to search
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    } else {
      return <></>;
    }
  }
}

export default Alert;
