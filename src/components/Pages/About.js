import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <div>
        <p>
          {" "}
          <strong>GitHub Finder V0</strong> (Using Prop Drilling And Only Class
          Components)
        </p>
        <p>Tools:</p>
        <ul>
          <li>GithubApi </li>
          <li>Vscode</li>
        </ul>
      </div>
    );
  }
}

export default About;
