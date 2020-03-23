import React from 'react';



const DonateThingsHeader = () =>{
  return (
    <div className="home__header-container">
      <div className="header-right-side">
        <div className="header-right-side-banner">
          <div className="banner-top">
            <h1>Donate things you do not need!</h1>
            <svg
              className="decoration"
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
            <p>It takes only 4 simple steps!</p>
          </div>
          <div className="banner-bottom">
            <div className="banner__bottom-content">
              <div className="step__element">
                <p className="step__element-text">
                  <b>1</b>
                  <br />
                  Choose
                  <br /> items
                </p>
              </div>
              <div className="step__element">
                <p className="step__element-text">
                  <b>2</b>
                  <br />
                  Pack them
                  <br />
                  into bags
                </p>
              </div>
              <div className="step__element">
                <p className="step__element-text">
                  <b>3</b>
                  <br />
                  Choose
                  <br />
                  foundation
                </p>
              </div>
              <div className="step__element">
                <p className="step__element-text">
                  <b>4</b>
                  <br />
                  Book
                  <br />
                  delivery man
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home__header-left-side">
        <img
          src={require("../../../assets/images/Home-Hero-Image1.jpg")}
          alt="unused items header"
        />
      </div>
    </div>
  );
};

export default DonateThingsHeader;
