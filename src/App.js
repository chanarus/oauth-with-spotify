import React, { Component, Fragment } from "react";
import { Provider, Consumer } from "./context";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Login from "./components/login/Login";

class App extends Component {
  render() {
    return (
      <Provider>
        <Fragment>
          <Navbar />
          <Consumer>
            {value => {
              if (value.loggedIn) {
                return (
                  <div className="container">
                    <Home />
                  </div>
                );
              } else {
                return <Login />;
              }
            }}
          </Consumer>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
