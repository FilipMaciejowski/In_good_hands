import firebase from "firebase";
import {
  ADD_FORM_DATA_REJECTED,
  ADD_FORM_DATA_PENDING,
  ADD_FORM_DATA_DEPLOYED,
  FETCH_ORGANIZATIONS_PENDING,
  FETCH_ORGANIZATIONS_FETCHED,
  FETCH_ORGANIZATIONS_REJECTED,
  SET_USER_NOT_LOGGED
} from "../../redux/types";

export const addDonateItemsData = dataDonateItems => dispatch => {
  dispatch({ type: ADD_FORM_DATA_PENDING });
  const db = firebase.firestore();
  const ref = db.collection("donate-items").doc();
  return new Promise((resolve, reject) => {
    ref
      .set({
        formData: {
          ...dataDonateItems
        }
      })
      .then(() => {
        dispatch({ type: ADD_FORM_DATA_DEPLOYED });
        resolve();
      })
      .catch(err => {
        dispatch({ type: ADD_FORM_DATA_REJECTED, payload: err });
        reject();
      });
  });
};

export const fetchOrganizations = () => dispatch => {
  dispatch({ type: FETCH_ORGANIZATIONS_PENDING });
  const db = firebase.firestore();
  const ref = db.collection("donate-items");
  const organizations = [];
  return new Promise((resolve, reject) => {
    ref
      .get()
      .then(col => {
        col.docs.map(doc => {
          const data = doc.data();
          organizations.push({
            typeOfOrganization: data.formData.typeOfOrganization,
            organization: data.formData.organization,
            bagsDonated: data.formData.bag,
          });
        });

        dispatch({ type: FETCH_ORGANIZATIONS_FETCHED, payload: organizations });
        resolve();
      })
      .catch(err => {
        reject();
        dispatch({ type: FETCH_ORGANIZATIONS_REJECTED, payload: err });
      });
  });
};
