import React, { Component } from "react";

export class Search extends Component {
  state = {
    data: "",
  };

  // To Pass The Prop Up
  passUp = (e) => {
    e.preventDefault();
    // This Methodes (searchUsers) Must Be Difined In The Global State

    if (this.state.data === "") {
      this.props.showAlert(true);
    } else {
      this.props.searchUsers(this.state.data);
      this.setState({ data: "" }); // To Clear The Form
    }
  };

  // To Bind The State
  bind = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.passUp} className="form">
          <input
            type="text"
            name="data"
            value={this.state.data}
            onChange={this.bind}
            placeholder="Search Users..."
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default Search;
