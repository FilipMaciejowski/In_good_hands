import React from 'react';
import LogIn from '../Registration/LogIn';
import SignUp from '../Registration/SignUp';
import { Route, Switch } from "react-router-dom";


const Registration = () =>{
  return (
    <div>
      <Switch>
        <Route exact path="/registration/login" component={LogIn} />
        <Route exct path="/registration/signup" component={SignUp} />
      </Switch>
    </div>
  );
};

export default Registration; 

