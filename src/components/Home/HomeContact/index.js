import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import classnames from 'classnames'
import Loading from "../HomeWeHelp/Loading";
import HomeFooter from "../HomeFooter";

const HomeContact = () => {
  const requestUrl = "https://fer-api.coderslab.pl/v1/portfolio/contact";
  const { register, handleSubmit } = useForm();
  const [sending, setSending] = useState(false);
  const [error, setErrorRequest] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [errorNameNumber, setErrorNameNumber] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const isError = errorNameNumber || emailError || errorMessage;
  const isEmpty = !(emailValue && messageValue && nameValue);

  const onSubmit = event => {
    if (isEmpty || isError) {
      return;
    }
    sendData(event);
  };

  const messageValidation = () => {
    if (checkMessageLength(messageValue)) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
    }
  };

  const nameValidation = () => {
    if (checkIsOneExpression(nameValue)) {
      setErrorName(true);
    } else {
      setErrorName(false);
    }

    if (checkIsContainNumber(nameValue)) {
      setErrorNameNumber(true);
    } else {
      setErrorNameNumber(false);
    }
  };

  const checkIsOneExpression = stringData => {
    return /\s/.test(stringData.trim());
  };

  const checkIsContainNumber = stringData => {
    return /\d/.test(stringData);
  };

  const checkMessageLength = message => {
    return message.length < 120;
  };

  const validateEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const sendData = data => {
    setSending(true);
    axios
      .post(requestUrl, JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(() => {
        setSuccessMessage(true);
      })
      .catch(() => {
        setErrorRequest(true);
      })
      .finally(() => {
        setSending(false);
      });
  };

  
  return (
    <div className="contact__container">
      {sending ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="contact__submit-container">
          <div className="contact__form-content">
            <h1 className="contact__header">Contact us!</h1>
            <svg
              className="contact__decoration"
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
              <div className="contact__form-container">
                <div className="top__input">
                  <div className="input__element-container">
                    <label>Enter your name</label>
                    <input
                      className={`${errorName ? "name_error" : ""}`}
                      type="text"
                      name="name"
                      placeholder=""
                      ref={register}
                      onChange={e => {
                        setNameValue(e.target.value);
                      }}
                      onBlur={() => nameValidation()}
                    />
                    {errorName ? (
                      <div>name should be one expression</div>
                    ) : null}
                    {errorNameNumber ? (
                      <div>name shouldn't contain number</div>
                    ) : null}
                  </div>
                  <div className="input__element-container">
                    <label>Enter your email</label> 
                    <input
                      className={classnames("", {message__error: emailError })}
                      type="email"
                      name="email"
                      placeholder=""
                      ref={register}
                      onChange={e => {
                        setEmailValue(e.target.value);
                      }}
                      onBlur={() => validateEmail()}
                    />
                  </div>
                  {emailError ? (
                    <div className="contact__incorect-email">
                      Enter correct email
                    </div>
                  ) : null}
                </div>
                <label>Enter your message</label>
                <textarea
                  placeholder=""
                  className={classnames("", { message__error: errorMessage })}
                  name="message"
                  ref={register}
                  onChange={e => setMessageValue(e.target.value)}
                  onBlur={() => messageValidation()}
                />
                {errorMessage ? (
                  <div
                    style={{
                      color: "red",
                      fontSize: ".75rem",
                      marginTop: ".25rem"
                    }}
                  >
                    the message should be longer or equal to 120 characters{" "}
                  </div>
                ) : null}
              </div>
              <div className="button__form__container">
                <button
                  type="submit"
                  style={{ cursor: (isError || isEmpty) && "not-allowed" }}
                >
                  Submit
                </button>
              </div>
            </form>
            {error ? (
              <div style={{ color: "red" }}>
                something went wrong, try again later
              </div>
            ) : null}
            {successMessage ? (
              <div>The message has been sent correctly!</div>
            ) : null}
          </div>
          <HomeFooter />
        </div>
      )}
    </div>
  );
};

export default HomeContact;
