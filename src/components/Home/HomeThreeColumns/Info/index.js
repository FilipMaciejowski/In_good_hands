import React from 'react';


const Info = ( props ) =>{

const {amout, activities, description} = props;

  return(
    <div className="info__element">
      <h1>{amout}</h1>
      <h2>{activities}</h2>
      <p>{description}</p>
    </div>
  )
};

export default Info;