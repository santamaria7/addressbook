import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <Router>
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/settings" exact component={Settings} />
        </Switch>
      </>
    </Router>
  );
}
