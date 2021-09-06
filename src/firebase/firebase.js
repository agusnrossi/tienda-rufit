import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDMJWuAUaBgOOfPqFIVbBC0pnrr0jL4nME",
  authDomain: "tiendarufit.firebaseapp.com",
  projectId: "tiendarufit",
  storageBucket: "tiendarufit.appspot.com",
  messagingSenderId: "22863567559",
  appId: "1:22863567559:web:9ba29895365e0b0fcabce2",
});

export const getFirebase = () => {
  return app;
};

export const getFirestore = () => {
  return firebase.firestore(app);
};
