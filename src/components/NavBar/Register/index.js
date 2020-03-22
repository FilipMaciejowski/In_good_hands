import React, { useEffect, useState } from "react";
import { logOutUser } from "../../../firebase/firebase-actions/authentication";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const Register = () => {
  

  const userData = useSelector(state => state.userData);
  const [userState, setUserState] = useState(false);
  const history = useHistory();
  
  useEffect(() => {
    setUserState(userData.logged);
  }, [userData]);

  const logOut = () => {
    logOutUser().then(() => {
      history.push('./logged-out')
    })
  };
    
 const location = useLocation();

 const renderLocation = () => {
   if (
     location.pathname === "/login" ||
     location.pathname === "/signup" ||
     location.pathname === "/logout" ||
     location.pathname === "/give-things-back"
   ) {
     return <Link to="/">Home</Link>;
   }
 };


  return (
    <div className="registration__menu">
      {userState ? (
        <div className="registration__menu-logout">
          <div className="registration__menu-content">
            <p style={{ fontSize: "1rem" }} className="user__login">
              Hi {userData.user.userName}!
            </p>
            <button onClick={() => logOut()}>Log out</button>
            {renderLocation()}
          </div>
        </div>
      ) : (
        <div className="registration__menu-main">
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Sign up</NavLink>

          {renderLocation()}
        </div>
      )}
    </div>
  );
};




export default Register;
