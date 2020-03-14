import React from "react";
import Home from "../components/Home";
import SignUp from "../components/Registration/SignUp";
import LogIn from "../components/Registration/LogIn";
import NavBar from '../components/NavBar';

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
import LoggedOut from "../components/LoggedOut";
import DonateThings from "../components/DonateThings";

const App = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.auth().onAuthStateChanged(user => checkIsUserLogged(user));
  
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <NavBar />
          <Switch className>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
            <Route path="/logged-out" component={LoggedOut} />
            <Route path="/give-things-back" component={DonateThings} />
            <Redirect path="*" to="/" />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
