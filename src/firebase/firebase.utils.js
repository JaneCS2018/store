import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyAISCbNi2BVKVZkz5_l-7ShHoxdDwmETxI",
    authDomain: "clothing-38322.firebaseapp.com",
    databaseURL:"https://clothing.firebaseio.com",
    projectId: "clothing-38322",
    storageBucket: "clothing-38322.appspot.com",
    messagingSenderId: "536617252532",
    appId: "1:536617252532:web:a345c8578638600a0a49e1",
    measurementId: "G-1E2P02S777"
  };
  

  firebase.initializeApp(config);

  export const auth =firebase.auth();
  export const firestore = firebase.firestore();

  export const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  provider.addScope('https://www.googleapis.com/auth/plus.login');
  

  export const signInWithGoogle =()=>auth.signInWithRedirect(provider);

  export default firebase;

