import React, { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppBar, Link as NavLink, Typography } from "@material-ui/core";

import TodoJS from "./components/js/TodoJS/TodoJS";
import TodoTS from "./components/ts/TodoTS/TodoTS";
import PageNotFound from "./components/js/PageNotFound/PageNotFound";
import "./App.css";

function App(): ReactElement {
  return (
    <Router>
      <header className="App-header">
        <Link className="App-link" to="/">
          JS
        </Link>
        <Link className="App-link" to="/ts">
          TS
        </Link>
      </header>
      <Switch>
        <Route path="/" exact component={TodoJS} />
        <Route path="/ts" component={TodoTS} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
