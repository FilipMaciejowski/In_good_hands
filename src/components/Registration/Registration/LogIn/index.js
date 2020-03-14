import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { logInUser } from "../../../firebase/firebase-actions/authentication";
import { useHistory } from "react-router";

const LogIn = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState('');
  const history = useHistory();
  const onSubmit = (data) => {
    logInUser(data).then(() => {
      history.push('/')
    }).catch((message) => {
      setError(message)
    })
  };

  return (
    <>
      Hello login
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="email" placeholder="email" ref={register} />
        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={register}
        />
        <button type="submit">Login</button>
        {error ? <p>{error}</p> : null}
      </form>
      <NavLink to="/register">Sign up</NavLink>
    </>
  );
};

export default LogIn;
