import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Loading from '../HomeWeHelp/Loading';
import HomeFooter from '../HomeFooter';

const HomeContact = () => {
  const requestUrl = 'https://fer-api.coderslab.pl/v1/portfolio/contact';
  const { register, handleSubmit } = useForm();
  const [sending, setSending] = useState(false);
  const [error, setErrorRequest] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [errorNameNumber, setErrorNameNumber] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const onSubmit = event => {
    if (runValidation(event)) {
      sendData(event);
    }
  };

  const runValidation = formData => {
    let isValid = true;
    if (checkIsOneExpression(formData.name)) {
      setErrorName(true);
      isValid = false;
    }
    if (checkIsContainNumber(formData.name)) {
      setErrorNameNumber(true);
      isValid = false
    }
    if (checkMessageLength(formData.message)) {
      setErrorMessage(true);
      isValid = false;
    }
    return isValid;
  };

  const checkIsStillFalseErrorName = e => {
    if (!checkIsOneExpression(e.target.value)) {
      setErrorName(false)
    }
    if (!checkIsContainNumber(e.target.value)) {
      setErrorNameNumber(false)
    }
  };

  const checkIsStillFalseErrorMessage = e => {
    if (!checkMessageLength(e.target.value)) {
      setErrorMessage(false)
    }
  };

  const checkIsOneExpression = stringData => {
    return /\s/.test((stringData).trim());
  };

  const checkIsContainNumber = stringData => {
    return /\d/.test((stringData));
  };

  const checkMessageLength = message => {
    return message.length < 120;
  };

  const sendData = data => {
    setSending(true);
    axios.post(
      requestUrl,
      JSON.stringify(data),
      {headers: {
        'Content-Type': 'application/json'
      }})
      .then(() => {
        setSuccessMessage(true)
      })
      .catch(() => {
        setErrorRequest(true)
      })
      .finally(() => {
        setSending(false);
      })
  };

  return (
    <div className="contact__container">
      {sending ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="contact__form-container">
          <div className="contact__form-content">
            <h1 className="contact__header">Contact with us!</h1>
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
                
                <input
                  onChange={e => checkIsStillFalseErrorName(e)}
                  type="text"
                  name="name"
                  placeholder="name"
                  ref={register}
                  required
                />
                {errorName ? <div>name should be one expression</div> : null}
                {errorNameNumber ? (
                  <div>name shouldn't contain number</div>
                ) : null}
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  ref={register}
                  required
                />
                <textarea
                  onChange={e => checkIsStillFalseErrorMessage(e)}
                  placeholder="message"
                  name="message"
                  ref={register}
                  required
                />
                {errorMessage ? (
                  <div>
                    the message should be longer or equal to 120 characters{" "}
                  </div>
                ) : null}
              </div>
              <button type="submit">Submit</button>
            </form>
            {error ? <div>something went wrong, try again later</div> : null}
            {successMessage ? (
              <div>The message has been sent correctly</div>
            ) : null}
          </div>
        </div>
      )}
      <HomeFooter />
    </div>
  );
};

export default HomeContact;

