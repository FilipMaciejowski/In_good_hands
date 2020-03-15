import React from 'react';
import { useHistory } from "react-router";

const LoggedOut = () => {
  const history = useHistory();

  const backToHome = () => {
    history.push("/")
  };

  return (
    <div>
      You are logged out!
      <button onClick={() => backToHome()}>Back to home</button>
    </div>
  )
};

export default LoggedOut;

