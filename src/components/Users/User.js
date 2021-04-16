import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Repos from "../Repos/Repos";

export class User extends Component {
  componentDidMount() {
    // this.props.match.params.login => to get the name From the Url
    this.props.getUser(this.props.match.params.login);
    this.props.getuserRepo(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    getuserRepo: PropTypes.func.isRequired,
  };
  render() {
    // Dustruct  The State
    const {
      name,
      avatar_url,
      company,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;
    const { loading, repos } = this.props;

    if (loading) return <Spinner />;

    return (
      <>
        <Link to="/" className="btn btn-light mb-3">
          {"<<-"} Back
        </Link>
        Hireable :
        {hireable ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              alt="Profile Img"
              className="round-img"
              style={{ width: "150px" }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <>
                <h3>Bio</h3> <p>{bio}</p>
              </>
            )}
            <a href={html_url} className="btn btn-dark my-1" target="blank">
              Visit GitHub
            </a>
            <ul>
              <li>
                {login && (
                  <>
                    <strong>UserName: </strong>
                    {login}
                  </>
                )}
              </li>
              <li>
                {company && (
                  <>
                    <strong>Comapany: </strong>
                    {company}
                  </>
                )}
              </li>
              <li>
                {blog && (
                  <>
                    <strong>Blog: </strong>
                    {blog}
                  </>
                )}
              </li>
              <li>
                <strong>Followers: </strong> {followers}
              </li>
              <li>
                <strong>Following: </strong> {following}
              </li>
              <li>
                <strong>Public Repos: </strong> {public_repos}
              </li>
              <li>
                <strong>Public Gists: </strong> {public_gists}
              </li>
            </ul>
          </div>
        </div>
        <h3 className="text-center">Last 5 Repos </h3>
        <Repos repos={repos} />
      </>
    );
  }
}

export default User;
