import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

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
    console.log(JSON.stringify(data))
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
    <div style={{height: "1000px", border: 'yellow'}}>
      {sending
        ?
        <div>Loading!!</div>
        :
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input onChange={(e) => checkIsStillFalseErrorName(e)} type="text" name="name" placeholder="name" ref={register} required/>
            {errorName ? <div>name should be one expression</div> : null}
            {errorNameNumber ? <div>name shouldn't contain number</div> : null}
            <input type="email" name="email" placeholder="email" ref={register} required/>
            <textarea  onChange={(e) => checkIsStillFalseErrorMessage(e)} placeholder="message" name="message" ref={register} required/>
            {errorMessage ? <div>the message should be longer or equal to 120 characters </div> : null}
            <button type="submit">Submit</button>
          </form>
          {error ? <div>something went wrong, try again later</div> : null}
          {successMessage ? <div>The message has been sent correctly</div> : null}
        </div>
      }
    </div>
  )
};

export default HomeContact;

