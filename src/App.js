import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { Provider } from "react-redux";

import Header from "./shared/Header";
import RentalList from "./components/rental/RentalList";
import RentalDetail from "./components/rental/RentalDetail";

import { init } from "./reducers/index";

import "./App.css";

const store = init();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />

            <div className="container">
              <Route
                exact
                path="/"
                render={() => {
                  return <Redirect to="/rentals" />;
                }}
              />
              <Route exact path="/" component={RentalList} />
              <Route exact path="/rentals" component={RentalList} />
              <Route exact path="/rentals/:id" component={RentalDetail} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
