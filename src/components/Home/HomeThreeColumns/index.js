import React from 'react';
import Info from './Info';


const HomeThreeColumns = () => {
  return (
    <div className="three__columns-container">
      <div className="three__columns-content">
        <Info
          amout={"10"}
          activities={"donated bags"}
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, non quis provident culpa tempora ipsam."
          }
        />
        <Info
          amout={"5"}
          activities={"supported organisations"}
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, non quis provident culpa tempora ipsam."
          }
        />
        <Info
          amout={"7"}
          activities={"organised donations"}
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, non quis provident culpa tempora ipsam."
          }
        />
      </div>
    </div>
  );
};

export default HomeThreeColumns;

