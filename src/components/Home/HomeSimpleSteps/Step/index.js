import React from 'react';
import { Link } from 'react-router-dom';

const Step = ( {children , topic, description} ) => {
  
  return (
    <div className="step__element">
      <Link to="/login">
        <div className="step__icon-container">{children}</div>
      </Link>
      <h1>{topic}</h1>
      <span></span>
      <p>{description}</p>
    </div>
  );
};

export default Step;