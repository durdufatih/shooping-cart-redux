import "./App.css";

import Cart from "./Cart";
import { Route, Switch } from "react-router-dom";

import Product from "./Product";
import { connect } from "react-redux";

const App = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </header>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { items: state.items };
};
export default connect(mapStateToProps)(App);
