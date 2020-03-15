import React, {useEffect, useState} from 'react';
import Info from './Info';
import { useSelector } from "react-redux";

const HomeThreeColumns = () => {
  const organizations = useSelector(state => state.formData.organizations);
  const status = useSelector(state => state.formData.status);
  const [donatedBags, setDonatedBags] = useState('0');
  const [supportedOrganisations, setSupportedOrganisations] = useState('0');
  const [organisedDonations, setOrganisedDonations] = useState('0');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (organizations) {
      calculationDonatedBags();
      calculationSupportedOrganisations();
      calculationOrganisedDonations();
    }
  }, [organizations]);

  useEffect(() => {
    if (status === "FETCHED" && typeof donatedBags === "number") {
      setLoading(false)
    }
  }, [donatedBags]);

  const calculationDonatedBags = () => {
    let bags = 0;
    if (status === "FETCHED") {
      organizations.forEach(organization => {
        bags+= Number(organization.bagsDonated)
      });
      setDonatedBags(bags)
    }
  };

  const calculationSupportedOrganisations = () => {
    setSupportedOrganisations(organizations.length);
  };

  const calculationOrganisedDonations = () => {
  };


  return (
    <div className="three__columns-container">
      <div className="three__columns-content">
          <>
            <Info
              amout={donatedBags}
              activities={"donated bags"}
              description={
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, non quis provident culpa tempora ipsam."
              }
            />
            <Info
              amout={supportedOrganisations}
              activities={"supported organisations"}
              description={
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, non quis provident culpa tempora ipsam."
              }
            />
            <Info
              amout={organisedDonations}
              activities={"organised donations"}
              description={
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, non quis provident culpa tempora ipsam."
              }
            />
          </>
      </div>
    </div>
  );
};

export default HomeThreeColumns;

