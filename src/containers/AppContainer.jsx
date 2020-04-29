import React, { Component, Fragment } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { getHistory } from "../utils";
import ChoosePizzaSizePage from "./pages/ChoosePizzaSizePage";
import ChoosePizzaCrustPage from "./pages/ChoosePizzaCrustPage";
import ChoosePizzaToppingsPage from "./pages/ChoosePizzaToppingsPage";
import ReviewCustomPizzaPage from "./pages/ReviewCustomPizzaPage";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router history={getHistory()}>
          <Switch>
            <Route exact path="/" component={ChoosePizzaSizePage} />
            <Route
              exact
              path="/choose-pizza-crust"
              component={ChoosePizzaCrustPage}
            />
            <Route
              exact
              path="/choose-pizza-toppings"
              component={ChoosePizzaToppingsPage}
            />
            <Route
              exact
              path="/pizza-receipt"
              component={ReviewCustomPizzaPage}
            />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
