import React, { Component } from "react";
import { Useritem } from "./Useritem";
import Spinner from "../layout/Spinner";

export class Users extends Component {
  render() {
    // Get The Passed Props
    const { users, loading } = this.props;
    if (loading) return <Spinner />;
    else
      return (
        //Set The syle As Var
        <div style={grid}>
          {users.map((user) => (
            <Useritem key={user.id} user={user} />
          ))}
        </div>
      );
  }
}

//Style Must Be Outside The Class
const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
};
export default Users;
