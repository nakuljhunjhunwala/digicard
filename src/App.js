import React from "react";
import Owner from "./component/pages/Owner";
import Sample from "./component/pages/Sample";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Public from "./component/pages/Public";
import Create from "./component/pages/Create";
import Home from "./component/pages/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/owner" exact component={Owner} />
        <Route path="/sample" component={Sample} />
        <Route path="/create" component={Create} />
        <Route path="/public/:username" component={Public} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
