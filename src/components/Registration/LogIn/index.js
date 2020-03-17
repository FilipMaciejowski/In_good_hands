import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { logInUser } from "../../../firebase/firebase-actions/authentication";
import { useHistory } from "react-router";
import Loading from '../../Home/HomeWeHelp/Loading';

const LogIn = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const history = useHistory();
  const isError = passwordError || emailError;
  const isEmpty = !(emailValue && passwordValue);

  const onSubmit = data => {
    if (isEmpty || isError) {
      return;
    }
    setLoading(true);
    logInUser(data)
      .then(() => {
        history.push("/");
      })
      .catch(message => {
        setError(message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const validateEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const validatePassword = () => {
    if (passwordValue.length >= 6) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  return (
    <div className="login__container">
      <h1 className="login__header">Log in</h1>
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
        <div className="login__input-container">
          <label>Email</label>
          <input
            className={`${emailError ? "email_error" : ""}`}
            type="text"
            name="email"
            placeholder=""
            ref={register}
            onChange={e => {
              setEmailValue(e.target.value);
            }}
            onBlur={() => validateEmail()}
          />
          {emailError ? <div className="incorrect__email">incorrect email adress</div> : null}
          <label>Password</label>
          <input
            className={`${(passwordError || error) ? "password_error" : ""}`}
            type="password"
            name="password"
            placeholder=""
            ref={register}
            onChange={e => {
              setPasswordValue(e.target.value);
            }}
            onBlur={() => validatePassword()}
          />
          {passwordError ? (
            <div className="password__error">password should be longer than 6 characters</div>
          ) : null}
        </div>
        {loading ? (
          <div>
            <Loading />
          </div>
        ) : (
          <div className="form__buttons">
            <button
              type="submit"
              style={{ cursor: (isError || isEmpty) && "not-allowed" }}
            >
              Login
            </button>
            {error ? <p style={{color: "red"}}>invalid password!</p> : null}
            <NavLink to="/signup">Sign up</NavLink>
          </div>
        )}
      </form>
    </div>
  );
};

export default LogIn;
