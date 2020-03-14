import React, { useEffect, useState } from 'react';
import { logOutUser } from "../../firebase/firebase-actions/authentication";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const RegisterHeader = () => {
  const userData = useSelector(state => state.userData);
  const [userState, setUserState] = useState(false);
  useEffect(() => {
    setUserState(userData.logged);
  },[userData]);
  return (
    <>
      {userState
        ?
        <div>
          <p>Hi {userData.user.userName}</p>
          <button onClick={() => logOut()}>Log out</button>
        </div>
        :
        <div>
          <NavLink to="/login">Log inn</NavLink>
          <NavLink to="/register">Sign up</NavLink>
          <NavLink to="/">back to home</NavLink>
        </div>
      }
    </>
  )
};

export default RegisterHeader;

