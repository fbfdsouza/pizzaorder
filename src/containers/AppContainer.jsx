import React, { Component, Fragment } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { getHistory } from "../utils";
import HomePage from "./pages/HomePage";
import ChoosePizzaSizePage from "./pages/ChoosePizzaSizePage";
import ChoosePizzaCrustPage from "./pages/ChoosePizzaCrustPage";
import ChoosePizzaToppings from "./pages/ChoosePizzaToppings";
import ReviewCustomPizzaPage from "./pages/ReviewCustomPizzaPage";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router history={getHistory()}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/choose-pizza-size"
              component={ChoosePizzaSizePage}
            />
            <Route
              exact
              path="/choose-pizza-crust"
              component={ChoosePizzaCrustPage}
            />
            <Route
              exact
              path="/choose-pizza-toppings"
              component={ChoosePizzaToppings}
            />
            <Route
              exact
              path="/review-pizza-order"
              component={ReviewCustomPizzaPage}
            />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
