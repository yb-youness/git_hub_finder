import React, { Component } from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

export class Repos extends Component {
  static propTypes = {
    repos: PropTypes.array.isRequired,
  };
  render() {
    const { repos } = this.props;
    return repos.map((repo) => <RepoItem key={repo.id} repo={repo} />);
  }
}

export default Repos;
