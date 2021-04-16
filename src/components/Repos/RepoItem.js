import React, { Component } from "react";
import PropTypes from "prop-types";

export class RepoItem extends Component {
  static propTypes = {
    repo: PropTypes.object.isRequired,
  };
  render() {
    const { repo } = this.props;
    return (
      <div className="card">
        <a href={repo.html_url} target="blank">
          {repo.name}
        </a>
      </div>
    );
  }
}

export default RepoItem;
