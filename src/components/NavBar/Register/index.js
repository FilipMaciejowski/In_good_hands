import React, { useEffect, useState } from "react";
import { logOutUser } from "../../../firebase/firebase-actions/authentication";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Register = () => {
  const userData = useSelector(state => state.userData);
  const [userState, setUserState] = useState(false);
  useEffect(() => {
    setUserState(userData.logged);
  }, [userData]);

  

  return (
    <div className="registration__menu">
      {userState ? (
        <div className="registration__menu-logout">
          <p>Hi {userData.user.userName}</p>
          <button onClick={() => logOutUser()}>Log out</button>
        </div>
      ) : (
        <div className="registration__menu-main">
          <NavLink to="/login" activeClassName="active">
            Log in
          </NavLink>
          <NavLink to="/signup" activeClassName="active">
            Sign up
          </NavLink>
          <Link to="/" >
            home
          </Link>
        </div>
      )}
    </div>
  );
};




export default Register;
