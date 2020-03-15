import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { registerUser } from "../../../firebase/firebase-actions/authentication";
import { useHistory } from "react-router";

const SignUp = () => {
  const { register, handleSubmit, watch, formState} = useForm({ mode: "onChange"});
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
    <div className="signup__container">
      <h1 className="signup__header">Sign up</h1>
      <svg
        className="login__decoration"
        xmlns="http://www.w3.org/2000/svg"
        width="253"
        height="33"
        viewBox="0 0 253 33"
      >
        >
        <defs />
        <defs>
          <clipPath id="a">
            <path fill="none" d="M0 0h253v33H0z" />
          </clipPath>
        </defs>
        <g
          fill="none"
          stroke="#1a1818"
          stroke-linecap="round"
          stroke-miterlimit="10"
          clip-path="url(#a)"
        >
          <path
            stroke-width="1.788"
            d="M126.495 27.426l8.965-8.732-8.965-8.732-8.955 8.732 8.965 8.732"
          />
          <path
            stroke-width="1.788"
            d="M126.495 18.712l8.965-8.732-8.965-8.732-8.955 8.732z"
          />
          <path stroke-width="1.811" d="M99.222 17.154H.906" />
          <path
            stroke-width="1.788"
            d="M154.236 17.162l-5.638 5.491-11.054-10.765 2.155-2.1 4.679 4.558-4.679 4.558-13.21-12.866-13.19 12.866-4.678-4.561 4.679-4.558 2.155 2.1-11.053 10.766-5.638-5.491"
          />
          <path stroke-width="1.811" d="M252.094 17.154h-98.316" />
          <path
            stroke-width="1.788"
            d="M121.307 26.678l5.193-5.193 5.058 5.058-5.193 5.193z"
          />
          <path
            stroke-width="1.788"
            d="M158.362 21.965h-4.3l-5.428-5.287-9.673 9.422-12.464-12.14-12.464 12.14-9.673-9.422-5.428 5.287h-4.3"
          />
        </g>
      </svg>
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
            validate: value => value === watch("password")
          })}
          placeholder="confirm password"
          required
        />
        <button type="submit">sign in</button>
        {error ? <p>{error}</p> : null}
        {formState.isSubmitted &&
        formState.password &&
        formState.confirmPassword &&
        !formState.isValid ? (
          <p>Hasło i potwierdzenie hasła nie są takie same</p>
        ) : null}
      </form>
    </div>
  );
};

export default SignUp;

