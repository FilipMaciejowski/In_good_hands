import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import organizationsTypes from "../../../constans/organizationsTypes";
import './style.scss'
import {fetchOrganizations} from "../../../redux/actions/form-actions";

const HomeWeHelp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [activeType, setActiveType] = useState(Object.keys(organizationsTypes)[0]);
  const [organizationByTypes, setOrganizationByTypes] = useState({});
  const organizations = useSelector(state => state.formData.organizations);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(fetchOrganizations()).then(() => {
      setLoading(false);
    }).catch(() => {
      setLoading(false);
      setError(true)
    })
  }, []);

  useEffect(() => {
    setOrganizationsByTypes()
  },[organizations]);

  const setOrganizationsByTypes = () => {
    let newOrganizations = {};
    organizations.forEach(organization => {
      if (newOrganizations[organization.typeOfOrganization] === undefined) {
        newOrganizations[organization.typeOfOrganization] = [organization.organization]
      } else {
        newOrganizations[organization.typeOfOrganization].push(organization.organization)
      }
    });
    setOrganizationByTypes(newOrganizations)
  };

  const setOrganizationsHeader = () => {
    return (Object.keys(organizationsTypes).map(key =>
      <div className={`organization-header-till ${activeType === key ? 'header-till-active' : ''}`} key={key}
           onClick={() => setActiveType(key)}>{organizationsTypes[key]}</div>
    ))
  };
  const setOrganizationsFooter = () => {
    return (Object.keys(organizationsTypes).map((key, index) =>
      <div className={`organization-footer-number ${activeType === key ? 'organization-footer-number-active' : ''}`} key={key}
           onClick={() => setActiveType(key)}>{index + 1}</div>
    ))
  };
  const setOrganizationsContent = () => {
    return (
      <>
        {organizationByTypes[activeType] === undefined
          ?
          <div>
            Brak tego typu organizacji dodaj pierwszą !
          </div>
          :
          <div>
            {organizationByTypes[activeType].map(organization => {
              return <div>{organization}</div>
            })}
          </div>
        }
      </>
    )
  };
  return (
    <>
      {error
        ?
        <div>
          Error try again later
        </div>
        :
        <div>
          {
            loading
              ?
              <div>
                Loading !
              </div>
              :
              <div>
                <div className="tills-wrapper">
                  {setOrganizationsHeader()}
                </div>
                <div>
                  {setOrganizationsContent()}
                </div>
                <div className="footer-wrapper">
                  {setOrganizationsFooter()}
                </div>
              </div>
          }
        </div>
      }
    </>
  )
};

export default HomeWeHelp;

