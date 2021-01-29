import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBsETGOqoPbDf0yVe6NcX6-rU-yDGT-Iag",
    authDomain: "crown-db-7d752.firebaseapp.com",
    projectId: "crown-db-7d752",
    storageBucket: "crown-db-7d752.appspot.com",
    messagingSenderId: "47163355530",
    appId: "1:47163355530:web:321ff99aae9790433c1873",
    measurementId: "G-13YRK313BD"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ promt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;