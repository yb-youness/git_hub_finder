import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Useritem extends Component {
  // The State Colud Be Defind In The constructor Or Outside

  render() {
    // Pull The Data From The Props (The User Prop Passed From Above )
    const { login, avatar_url } = this.props.user;

    return (
      <div className="Card text-center mb-2 ">
        <img
          src={avatar_url}
          className="text-center"
          alt="Avatar"
          style={{ width: "190px" }}
        ></img>
        <h3>{login}</h3>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    );
  }
}

export default Useritem;
