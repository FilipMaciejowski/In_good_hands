import React from 'react';
import { Link } from 'react-router-dom';
import Step from './Step';


const HomeSimpleSteps = () =>{
 

  return (
    <div className="siple__steps-container">
      <div className="simple__steps-top">
        <h1>It's only 4 simple steps</h1>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="253"
          height="33"
          viewBox="0 0 253 33"
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
      </div>

      <div className="simplesteps__links-container">
        <div className="simplesteps__links">
          <Step
            topic={"Choose items"}
            description={"clothes, toys, tools, etc."}
          >
            <img
              className="step__icon"
              src={require("../../../assets/images/Icon.png")}
              alt="t-shirt-icon"
            />
          </Step>
          <Step topic={"Pack them"} description={"use garbage bags"}>
            <img
              className="step__icon"
              src={require("../../../assets/images/Icon2.png")}
              alt="bag-icon"
            />
          </Step>
          <Step topic={"decide who"} description={"choose a place you trust"}>
            <img
              className="step__icon"
              src={require("../../../assets/images/Icon3.png")}
              alt="zoom-icon"
            />
          </Step>
          <Step
            topic={"book a delivery man"}
            description={"pick-up time that suits you"}
          >
            <img
              className="step__icon"
              src={require("../../../assets/images/Icon4.png")}
              alt="cycle-icon"
            />
          </Step>
        </div>
      </div>
      <div className="simple__steps-button-container">
        <Link className="simple__steps-button" to="/login">
          <span>Donate</span>
          <span>items</span>
        </Link>
      </div>
    </div>
  );
};


export default HomeSimpleSteps;

