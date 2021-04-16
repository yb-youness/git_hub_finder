import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/layout/Nav";
import Users from "./components/Users/Users";
import User from "./components/Users/User";
import Search from "./components/layout/Search";
import Alert from "./components/layout/Alert";
import About from "./components/Pages/About";
import "./App.css";
import axios from "axios";
import NotFound from "./components/Pages/NotFound";
import { ClientId, ClientSecret } from "./env";

class App extends Component {
  // Global State
  state = {
    users: [],
    user: {}, // Object to Get A single User
    repos: [], // User Repos
    loading: false, // For Spinner Loding
    alert: false,
  };

  //bind  the .env
  githubclientsecret = ClientSecret();
  githubclientId = ClientId();

  //Life Cycle Metods
  // Run when the comp mount for outmiting the req
  async componentDidMount() {
    this.setState({ loading: true }); // set The Loding to True To Display The Spinner

    const results = await axios.get(
      `https://api.github.com/users?client_id=${this.githubclientId}&client_secret=${this.githubclientsecret}`
    );

    this.setState({ users: results.data });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);

    // console.log(this.state);    //Debug
  }

  // This Methode  Has The Role To Search For users
  searchUsers = async (data) => {
    this.setState({ loading: true }); // set The Loding to True To Display The Spinner
    //console.log(data + "From App"); //Debug
    const results = await axios.get(
      `https://api.github.com/search/users?q=${data}&client_id=${this.githubclientId}&client_secret=${this.githubclientsecret}`
    );

    //The Data Is In results.data.items See The Doc
    this.setState({ users: results.data.items });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  };

  // Get  A single User
  getUser = async (userName) => {
    this.setState({ loading: true }); // set The Loding to True To Display The Spinner
    //console.log(data + "From App"); //Debug
    const results = await axios.get(
      `https://api.github.com/users/${userName}?client_id=${this.githubclientId}&client_secret=${this.githubclientsecret}`
    );

    //The Data Is In results.data See The Doc
    this.setState({ user: results.data });

    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  };

  //Get User Repos
  getUserRepo = async (userName) => {
    //console.log(data + "From App"); //Debug
    const results = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${this.githubclientId}&client_secret=${this.githubclientsecret}`
    );

    //The Data Is In results.data See The Doc
    this.setState({ repos: results.data });
  };

  // ToSetThe Alert Comp
  showAlert = (etat) => {
    this.setState({ alert: etat });
    setTimeout(() => this.setState({ alert: false }), 1000);
  };
  render() {
    // Dustruct the Loding
    const { loading, users, user, repos } = this.state;
    return (
      <Router>
        <Nav icon="fab fa-github" />
        <div className="container">
          <Switch>
            {/* All Routes Must Be Embeded Here  */}
            <Route
              exact
              path="/"
              render={(props) => (
                <>
                  <Alert alert={this.state.alert} />
                  <Search
                    searchUsers={this.searchUsers}
                    showAlert={this.showAlert}
                  />
                  <Users loading={loading} users={users} />
                </>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/user/:login"
              render={(props) => (
                <User
                  {...props}
                  user={user}
                  loading={loading}
                  getUser={this.getUser}
                  getuserRepo={this.getUserRepo}
                  repos={repos}
                />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
