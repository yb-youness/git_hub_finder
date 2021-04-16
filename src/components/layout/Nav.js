import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class Nav extends Component {
  //Default Props
  static defaultProps = {
    title: "GitHubFinder",
  };
  //Props Types (Reinforce Type Check)
  PropTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
  };

  render() {
    // Distruction
    const { icon, title } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <span className="navbar-brand">
          <i className={icon}></i> {title}
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
