import React, { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import TodoJS from "./components/js/TodoJS";
import TodoTS from "./components/ts/TodoTS";
import PageNotFound from "./components/js/PageNotFound";
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
        <Route
          path="/"
          exact
          render={() => (
            <TodoJS
              noTaskText="You have no tasks added."
              headerText="Todo JSX example."
            />
          )}
        />
        <Route
          path="/ts"
          render={() => (
            <TodoTS
              noTaskText="You have no tasks added."
              headerText="Todo TSX example."
            />
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
