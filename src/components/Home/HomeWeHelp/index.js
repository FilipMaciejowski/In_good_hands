import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import organizationsTypes from "../../../constans/organizationsTypes";
import './style.scss'
import { fetchOrganizations } from "../../../redux/actions/form-actions";

const HomeWeHelp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [activeType, setActiveType] = useState(Object.keys(organizationsTypes)[0]);
  const [organizationByTypes, setOrganizationByTypes] = useState({});
  const [activePagination, setActivePagination] = useState(1);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(2);
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
  }, [dispatch]);

  useEffect(() => {
    setOrganizationsByTypes()
  },[organizations, setOrganizationByTypes]);

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

  const setType = key => {
    if (activeType !== key) {
      setActiveType(key);
      setActivePagination(1);
      setMinIndex(0);
      setMaxIndex(2);
    }
  };
  const setOrganizationsHeader = () => {
    return (Object.keys(organizationsTypes).map(key =>
      <div className={`organization-header-till ${activeType === key ? 'header-till-active' : ''}`} key={key}
           onClick={() => setType(key)}>{organizationsTypes[key]}</div>
    ))
  };
  const setOrganizationsPagination = () => {
    let length = 0;
    const pagination = [];
    let paginationNumber = 1;
    if (typeof organizationByTypes[activeType] === 'object') {
      length = organizationByTypes[activeType].length;
    }
    length = Math.ceil(length / 3);
    if (length) {
      for (let i = 0; i < length; i++) {
        pagination.push(<div className={`organization-footer-number ${activePagination === i + 1 ? 'organization-footer-number-active' : ''}`} key={`${activeType + paginationNumber}`}
                             onClick={() => setPagination(i + 1)}>{i + 1}</div>);
        paginationNumber++
      }
    }
    return pagination
  };

  const setPagination = value => {
    if (activePagination !== value) {
      setActivePagination(value);
      let newIndex = value * 3;
      setMinIndex(newIndex -3);
      setMaxIndex(newIndex -1);
    }
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
            {organizationByTypes[activeType].map((organization, index) => {
              if (index >= minIndex && index <= maxIndex) {
                return <div key={`${activeType + index}`}>{organization}</div>
              }

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
                  {setOrganizationsPagination()}
                </div>
              </div>
          }
        </div>
      }
    </>
  )
};

export default HomeWeHelp;

