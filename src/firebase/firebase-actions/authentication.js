import firebase from "firebase";
import { store } from "../../redux";
import {
  REMOVE_USER_DATA,
  SET_USER_FETCHED,
  SET_USER_PENDING,
  SET_USER_REJECTED
} from "../../redux/types";

export const logInUser = userData => {
  const auth = firebase.auth();
  const db = firebase.firestore();
  store.dispatch({type: SET_USER_PENDING});
  return new Promise((resolve, reject) => {
    auth.signInWithEmailAndPassword(userData.email, userData.password).then((data) => {
      const ref = db.collection('users').doc( data.user.email);
      ref.get().then(doc => {
        store.dispatch({type: SET_USER_FETCHED, payload: doc.data()});
        resolve();
      }).catch(err => {
        logOutUser();
        store.dispatch({type: SET_USER_REJECTED});
        reject(err.message)
      });
      resolve();
    }).catch((err) => {
      store.dispatch({type: SET_USER_REJECTED});
      reject(err.message)
    })
  });
};

export const registerUser = userData => {
  const auth = firebase.auth();
  const db = firebase.firestore();
  const ref = db.collection('users').doc(userData.email);
  return new Promise((resolve, reject) => {
    auth.createUserWithEmailAndPassword(userData.email, userData.password).then(() => {
      ref.set({
        userName: userData.userName,
        email: userData.email
      }).then(() => {
        resolve();
      }).catch((err) => {
        reject(err.message)
      })
    }).catch((err) => {
      reject(err.message)
    })
  });
};

export const logOutUser = () => {
  const auth = firebase.auth();
  return new Promise((resolve, reject) => {
    auth.signOut().then(() => {
      resolve();
      store.dispatch({type: REMOVE_USER_DATA})
    }).catch(() => {
      reject();
    })
  })
};

export const checkIsUserLogged = user => {
  const db = firebase.firestore();
  if (user) {
    const ref = db.collection('users').doc(user.email);
    ref.get().then(doc => {
      store.dispatch({type: SET_USER_FETCHED, payload: doc.data()});
    }).catch(err => {
      logOutUser();
      store.dispatch({type: SET_USER_REJECTED});
    });
  }
};
