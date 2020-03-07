import React from "react";
import Home from "../components/Home";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Registration from '../components/Registration';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/registration" component={Registration}/>
          <Redirect path="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
