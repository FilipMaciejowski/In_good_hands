import React from "react";
import Home from "../components/Home";
import SignUp from "../components/Registration/SignUp";
import LogIn from "../components/Registration/LogIn";
import Menu from '../components/Menu';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import firebase from "firebase";
import { firebaseConfig } from "../firebase/firestore";
import { store } from "../redux";
import { Provider } from "react-redux";
import { checkIsUserLogged } from "../firebase/firebase-actions/authentication";
import Register from "../components/Register";

const App = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.auth().onAuthStateChanged(user => checkIsUserLogged(user));
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Register />
          <Menu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={SignUp} />
            <Route path="/login" component={LogIn} />
            <Redirect path="*" to="/" />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
