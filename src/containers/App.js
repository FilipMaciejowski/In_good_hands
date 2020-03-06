import React from 'react';
import Home from './components/Main';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


const App = () => {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect path="*" to="/" />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
