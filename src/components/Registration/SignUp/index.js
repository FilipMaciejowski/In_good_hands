import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { registerUser } from "../../../firebase/firebase-actions/authentication";
import { useHistory } from "react-router";

const SignUp = () => {
  const {register, handleSubmit, watch, formState} = useForm({ mode: "onChange"});
  const [error, setError] = useState('');
  const history = useHistory();
  const onSubmit = data => {
    registerUser(data).then(() => {
      history.push('/')
    }).catch((message) => {
      setError(message)
    })
  };
  return (
    <>
      Sign in
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="userName"
          placeholder="your name"
          ref={register}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          ref={register}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={register}
          required
        />
        <input
          type="password"
          name="confirmPassword"
         ref={register({
          validate: (value) => value === watch('password')
        })} placeholder="confirm password" required
        />
        <button type="submit">sign in</button>
        {error ?
          <p>{error}</p>
          :
          null
        }
        { formState.isSubmitted && formState.password && formState.confirmPassword && !formState.isValid ?
          <p>Password and conformation of the password are not the same</p>
          :
          null
        }
      </form>
    </>
  )
};

export default SignUp;

