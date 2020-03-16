import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import organizationsTypes from "../../../constans/organizationsTypes";
import { fetchOrganizations } from "../../../redux/actions/form-actions";
import Loading from './Loading';

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
            There is no organization added yet. Add the first one! !
          </div>
          :
          <div>
            {organizationByTypes[activeType].map((organization, index) => {
              if (index >= minIndex && index <= maxIndex) {
                return <div  key={`${activeType + index}`}>{organization}</div>
              }

            })}
          </div>
        }
      </>
    )
  };

  return (
    <div className="whodowehelp__container">
      {error ? (
        <div>Error try again later</div>
      ) : (
        <div>
          {loading ? (
            <div>
              <Loading />
            </div>
          ) : (
            <div>
              <h1>Who do we help?</h1>
              <svg
                className="whodowehelp__decoration"
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
              <p className="whodowehelp__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste obcaecati, accusantium necessitatibus sunt voluptas suscipit, maiores, facilis adipisci animi ab debitis excepturi eius a enim?</p>
              <div className="tills-wrapper">{setOrganizationsHeader()}</div>
              <div className="content-wrapper">{setOrganizationsContent()}</div>
              <div className="footer-wrapper">
                {setOrganizationsPagination()}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HomeWeHelp;

