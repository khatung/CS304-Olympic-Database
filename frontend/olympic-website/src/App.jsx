import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import Home from "./Components/Home";
import Main from "./Components/Main";
import Information from "./Components/Information";
import notFoundPage from "./Components/404";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data,
    });
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={"/"}
              render={(props) => (
                <Home
                  {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            <Route
              exact
              path={"/main"}
              render={(props) => (
                <Main {...props} loggedInStatus={this.state.loggedInStatus} />
              )}
            />
            <Route
              exact
              path={"/information"}
              render={(props) => (
                <Information
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            <Route
              exact
              path={"/404"}
              render={(props) => (
                <notFoundPage
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            <Redirect to="/404" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
