import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addDonateItemsData } from "../../redux/actions/form-actions";

import organizationsTypes from "../../constans/organizationsTypes";
import HomeContact from "../Home/HomeContact";
import DonateThingsHeader from "./DonateThingsHeader";

const tillsInitialValue = {
  children: false,
  mothers: false,
  homeless: false,
  disabledPeople: false,
  oldPeople: false
};

const itemsToGiveBack = {
  secondhandClothes: "Ubrania które nadają się do ponownego użycia",
  clothesToThrowAway: "Ubrania, do wyrzucenia",
  toys: "Zabawki",
  books: "Książki",
  anotherThings: "inne"
};

const people = {
  children: "dzieciom",
  mothers: "samotnym matkom",
  homeless: "bezdomnym",
  disabledPeople: "niepełnosprawnym",
  oldPeople: "osobom starszym"
};

const DonateThings = () => {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [sendDataError, setSendDataError] = useState(false);
  const [errorFirstStep, setErrorFirstStep] = useState(false);
  const [errorSecondStep, setErrorSecondStep] = useState(false);
  const [errorThirdStepLocalization, setErrorThirdStepLocalization] = useState(
    false
  );
  const [errorThirdStepTarget, setErrorThirdStepTarget] = useState(false);
  const [errorThirdStepOrganization, setErrorThirdStepOrganization] = useState(
    false
  );
  const [errorFourthStep, setErrorFourthStep] = useState(false);
  const [tillsValue, setTillsValue] = useState(tillsInitialValue);
  const { register, handleSubmit } = useForm();

  const userData = useSelector(state => state.userData);
  const dispatch = useDispatch();

  const history = useHistory();
  const stepUp = () => {
    setStep(step + 1);
  };
  const stepDown = () => {
    setStep(step - 1);
  };

  const onSubmit = data => {
    if (step === 1 && validateFirstStep(data)) {
      firstStepSubmit(data);
      stepUp();
      setErrorFirstStep(false);
    }
    if (step === 2 && validateSecondStep(data)) {
      secondStepSubmit(data);
      stepUp();
      setErrorSecondStep(false);
    }
    if (step === 3 && validateThirdStep(data)) {
      thirdStepSubmit(data);
      stepUp();
      setErrorThirdStepLocalization(false);
      setErrorThirdStepTarget(false);
    }
    if (step === 4 && validateFourthStep(data)) {
      fourthStepSubmit(data);
      stepUp();
      setErrorFourthStep(false);
    }
  };

  const firstStepSubmit = data => {
    setFormData({
      ...formData,
      firstStep: data
    });
  };

  const secondStepSubmit = data => {
    setFormData({
      ...formData,
      secondStep: data
    });
  };

  const thirdStepSubmit = data => {
    let thirdStepData = {
      ...data,
      targets: tillsValue
    };
    setFormData({
      ...formData,
      thirdStep: thirdStepData
    });
  };

  const fourthStepSubmit = data => {
    setFormData({
      ...formData,
      fourthStep: data
    });
  };

  const validateFirstStep = data => {
    let isValid = false;
    Object.keys(data).forEach(key => {
      if (data[key] === true) {
        isValid = true;
      }
    });
    setErrorFirstStep(!isValid);
    return isValid;
  };

  const validateSecondStep = data => {
    if (data.bag) {
      return true;
    } else {
      setErrorSecondStep(true);
      return false;
    }
  };

  const validateThirdStep = data => {
    let isValidTarget = false;
    Object.keys(tillsValue).forEach(key => {
      if (tillsValue[key] === true) {
        isValidTarget = true;
      }
    });
    if (!isValidTarget) {
      setErrorThirdStepTarget(true);
    }
    let isValidLocalization = false;
    if (data.localization) {
      isValidLocalization = true;
    } else {
      setErrorThirdStepLocalization(true);
    }
    const organizationValidation =
      !!data.typeOfOrganization && !!data.organization;
    if (!organizationValidation) {
      setErrorThirdStepOrganization(true);
    }
    return isValidLocalization && isValidTarget && organizationValidation;
  };

  const validateFourthStep = data => {
    let isValid = true;
    Object.keys(data).forEach(key => {
      if (!data[key]) {
        isValid = false;
      }
    });
    if (!isValid) {
      setErrorFourthStep(true);
    }
    return isValid;
  };

  const setOptions = () => {
    return Object.keys(organizationsTypes).map(key => (
      <option key={key} value={key}>
        {organizationsTypes[key]}
      </option>
    ));
  };

  const stepOne = () => {
    return (
      <>
        <h1 className="step__header">Choose items you would like to add: </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="step-inputs-wrapper">
            <div className="step__input-item-container">
              <input
                className="step__1-checkbox"
                type="checkbox"
                id="secondhandClothes"
                name="secondhandClothes"
                ref={register}
                defaultChecked={
                  formData.firstStep
                    ? formData.firstStep.secondhandClothes
                    : false
                }
              />
              <label htmlFor="secondhandClothes">
                {itemsToGiveBack.secondhandClothes}
              </label>
            </div>
            <br />
            <div className="step__input-item-container">
              <input
                className="step__1-checkbox"
                type="checkbox"
                id="clothesToThrowAway"
                name="clothesToThrowAway"
                ref={register}
                defaultChecked={
                  formData.firstStep
                    ? formData.firstStep.clothesToThrowAway
                    : false
                }
              />
              <label htmlFor="clothesToThrowAway">
                {itemsToGiveBack.clothesToThrowAway}
              </label>
            </div>
            <br />
            <div className="step__input-item-container">
              <input
                className="step__1-checkbox"
                type="checkbox"
                id="toys"
                name="toys"
                ref={register}
                defaultChecked={
                  formData.firstStep ? formData.firstStep.toys : false
                }
              />
              <label htmlFor="toys">{itemsToGiveBack.toys}</label>
            </div>
            <br />
            <div className="step__input-item-container">
              <input
                className="step__1-checkbox"
                type="checkbox"
                id="books"
                name="books"
                ref={register}
                defaultChecked={
                  formData.firstStep ? formData.firstStep.books : false
                }
              />
              <label htmlFor="books">{itemsToGiveBack.books}</label>
            </div>
            <br />
            <div className="step__input-item-container">
              <input
                className="step__1-checkbox"
                type="checkbox"
                id="anotherThings"
                name="anotherThings"
                ref={register}
                defaultChecked={
                  formData.firstStep ? formData.firstStep.anotherThings : false
                }
              />
              <label htmlFor="anotherThings">
                {itemsToGiveBack.anotherThings}
              </label>
            </div>
          </div>
          <br />
          {errorFirstStep ? (
            <div className="error-message">
              You have to choose at least one item!
            </div>
          ) : null}

          <button className="btn__step">Next</button>
        </form>
      </>
    );
  };
  const stepTwo = () => {
    return (
      <>
        <h1 className="step__header">Please select number of 60l bags:</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="step-inputs-wrapper-select">
            <label className="number__of__bags" htmlFor="bags">
              Number of 60l bags:
            </label>

            {
              <select
                id="bags"
                name="bag"
                defaultValue={
                  formData.secondStep ? formData.secondStep.bag : ""
                }
                ref={register}
              >
                <option value="0" disabled>
                  -- Choose --
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            }
          </div>
          <br />
          {errorSecondStep ? (
            <div className="error-message">Please, choose amount of bags!!</div>
          ) : null}
          <div className="step__buttons-container">
            <button className="btn__step" type="submit">
              Next
            </button>
            <button className="btn__step" onClick={() => stepDown()}>
              Back
            </button>
          </div>
        </form>
      </>
    );
  };
  const stepThree = () => {
    return (
      <>
        <h1 className="step__header">Location:</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="step__3__step-inputs-wrapper">
            <div className="step__3__input-item-container">
              <label htmlFor="localization"></label>
              <select
                id="localization"
                name="localization"
                defaultValue={
                  formData.thirdStep ? formData.thirdStep.localization : ""
                }
                ref={register}
              >
                <option value="" disabled>
                  - Choose -
                </option>
                <option value="poznan">Bergen</option>
                <option value="warszawa">Kristiansand</option>
                <option value="krakow">Oslo</option>
                <option value="wroclaw">Stavanger</option>
                <option value="katowice">Trondheim</option>
              </select>
              {errorThirdStepLocalization ? (
                <div className="error-message">Please, choose location</div>
              ) : null}
            </div>
            <div className="step__3__input-item-container">
              <div
                className={`till ${tillsValue.children ? "help__active" : ""}`}
                onClick={() => changeTillValue("children")}
              >
                {people.children}
              </div>
              <div
                className={`till ${tillsValue.mothers ? "help__active" : ""}`}
                onClick={() => changeTillValue("mothers")}
              >
                {people.mothers}
              </div>
              <div
                className={`till ${tillsValue.homeless ? "help__active" : ""}`}
                onClick={() => changeTillValue("homeless")}
              >
                {people.homeless}
              </div>
              <div
                className={`till ${
                  tillsValue.disabledPeople ? "help__active" : ""
                }`}
                onClick={() => changeTillValue("disabledPeople")}
              >
                {people.disabledPeople}
              </div>
              <div
                className={`till ${tillsValue.oldPeople ? "help__active" : ""}`}
                onClick={() => changeTillValue("oldPeople")}
              >
                {people.oldPeople}
              </div>
              {errorThirdStepTarget ? (
                <div className="error-message">Choose at least one option</div>
              ) : null}
            </div>
            <div className="name__organisation">
              <div className="step__3__input-item-container">
                <label htmlFor="organization">Name of organisation</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  ref={register}
                  defaultValue={
                    formData.thirdStep ? formData.thirdStep.organization : ""
                  }
                />
              </div>
              <div className="step__3__select-item-container">
                <label htmlFor="typeOfOrganization">
                  Type of organisation:
                </label>
                <select
                  id="typeOfOrganization"
                  name="typeOfOrganization"
                  defaultValue={
                    formData.thirdStep
                      ? formData.thirdStep.typeOfOrganization
                      : ""
                  }
                  ref={register}
                >
                  <option value="" disabled>
                    - Choose -
                  </option>
                  {setOptions()}
                </select>
              </div>
            </div>
          </div>
          <br />
          {errorThirdStepOrganization ? (
            <div className="error-message">
              Enter name and type of an organisation!
            </div>
          ) : null}

          <div className="step__buttons-container">
            <button className="btn__step" type="submit">
              Next
            </button>
            <button className="btn__step" onClick={() => stepDown()}>
              Back
            </button>
          </div>
        </form>
      </>
    );
  };
  const stepFour = () => {
    return (
      <>
        <h1 className="step__header">Address and date of pick-up:</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="step__3__step-inputs-wrapper">
            <div className="address-column">
              <label htmlFor="street">Street</label>
              <input
                type="text"
                id="street"
                name="street"
                ref={register}
                defaultValue={
                  formData.fourthStep ? formData.fourthStep.street : ""
                }
              />
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                ref={register}
                defaultValue={
                  formData.fourthStep ? formData.fourthStep.city : ""
                }
              />

              <label htmlFor="zipCode">Zip Code</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                ref={register}
                defaultValue={
                  formData.fourthStep ? formData.fourthStep.zipCode : ""
                }
              />

              <label htmlFor="phone">Telephone number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                ref={register}
                defaultValue={
                  formData.fourthStep ? formData.fourthStep.phone : ""
                }
              />
            </div>

            <div className="term-column">
              <label htmlFor="date">Data</label>
              <input
                type="text"
                id="date"
                name="date"
                ref={register}
                defaultValue={
                  formData.fourthStep ? formData.fourthStep.date : ""
                }
              />

              <label htmlFor="hours">Hour</label>
              <input
                type="text"
                id="hours"
                name="hours"
                ref={register}
                defaultValue={
                  formData.fourthStep ? formData.fourthStep.hours : ""
                }
              />

              <label htmlFor="note">Comments for delivery man</label>
              <textarea
                id="note"
                name="note"
                ref={register}
                defaultValue={
                  formData.fourthStep ? formData.fourthStep.note : ""
                }
              />
            </div>
          </div>
          <br />
          {errorFourthStep ? (
            <div className="error-message">Fill out all inputs!</div>
          ) : null}

          <div className="step__buttons-container">
            <button className="btn__step" type="submit">
              Next
            </button>
            <button className="btn__step" onClick={() => stepDown()}>
              Back
            </button>
          </div>
        </form>
      </>
    );
  };

  const returnData = item => {
    let dataList = {};
    let formDataStep = {};
    let stringToReturn = "";
    if (item) {
      formDataStep = formData.firstStep;
      dataList = itemsToGiveBack;
    } else {
      formDataStep = formData.thirdStep.targets;
      dataList = people;
    }
    Object.keys(formDataStep).forEach(key => {
      if (formDataStep[key]) {
        if (stringToReturn.length) {
          stringToReturn += " ," + dataList[key];
        } else {
          stringToReturn += dataList[key];
        }
      }
    });
    return stringToReturn;
  };

  const finishStepper = () => {
    setLoading(true);
    let user = {};
    if (userData) {
      user = {
        name: userData.user.userName,
        email: userData.user.email
      };
    }
    const dataToSend = {
      ...formData.firstStep,
      ...formData.secondStep,
      ...formData.thirdStep,
      ...formData.fourthStep,
      user
    };
    dispatch(addDonateItemsData(dataToSend))
      .then(() => {
        setLoading(false);
        history.push("/");
      })
      .catch(() => {
        setLoading(false);
        setSendDataError(true);
        setTimeout(() => {
          setSendDataError(false);
          history.push("/");
        }, 5000);
      });
  };

  const summary = () => {
    const addressData = formData.fourthStep;
    return (
      <div>
        <h1>Podsumowanie Twojej darowizny</h1>
        <h2>
          Oddajesz: {formData.secondStep.bag} worki, {returnData(true)},{" "}
          {returnData(false)}{" "}
        </h2>
        <div>
          <div>
            <h2>Adres odbioru</h2>
            Ulica {addressData.street}
            Miasto {addressData.city}
            Kod pocztowy {addressData.zipCode}
            Numer telefonu {addressData.phone}
          </div>
          <div>
            <h2>Termin odbioru</h2>
            Data {addressData.date}
            Godzina {addressData.hours}
            Uwagi dla kuriera {addressData.note}
          </div>
        </div>
        <button onClick={() => finishStepper()}>Dalej</button>
        <button onClick={() => stepDown()}>wstecz</button>
      </div>
    );
  };

  const changeTillValue = item => {
    setTillsValue({
      ...tillsValue,
      [item]: !tillsValue[item]
    });
  };

  const returnCurrentStep = () => {
    if (step === 1) {
      return stepOne();
    } else if (step === 2) {
      return stepTwo();
    } else if (step === 3) {
      return stepThree();
    } else if (step === 4) {
      return stepFour();
    } else if (step === 5) {
      return summary();
    }
  };

  const returnMyDiv = () => {
    if (step === 1) {
      return (
        <div className="step__info-content">
          <div className="step__info-content-banner">
            <h1>Remember!</h1>
            <p>Fill in all details regarding items you would like to donate.</p>
          </div>
        </div>
      );
    } else if (step === 2) {
      return (
        <div className="step__info-content">
          <div className="step__info-content-banner">
            <h1>Remember!</h1>
            <p>Pack all of your items in 60l plastic bags.</p>
          </div>
        </div>
      );
    } else if (step === 3) {
      return (
        <div className="step__info-content">
          <div className="step__info-content-banner">
            <h1>Remember!</h1>
            <p>
              Fill in all info regardig who you would like to help and name of
              an organisation, foundation or company.
            </p>
          </div>
        </div>
      );
    } else if (step === 4) {
      return (
        <div className="step__info-content">
          <div className="step__info-content-banner">
            <h1>Remember!</h1>
            <p>Fill in an address and a place where items will be picked up.</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <DonateThingsHeader />
      <div>
        {loading ? (
          <div>Sending data (loading)</div>
        ) : (
          <div>
            {sendDataError ? (
              <div>Connection with database lost.</div>
            ) : (
              <div className="stepper-container">
                <div className="step__info">{returnMyDiv()}</div>
                <div className="stepper__main-container">
                  <div className="steps__container">
                    {step < 5 ? <p>Step {step}/4</p> : null}
                  </div>
                  <div className="stepper">{returnCurrentStep()}</div>
                </div>
              </div>
            )}
          </div>
        )}
        <HomeContact />
      </div>
    </>
  );
};

export default DonateThings;
