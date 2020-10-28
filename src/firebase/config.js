import  firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyD1hrCir-Vwf_RBDA4xiaW3G36tAuXxuMg",
    authDomain: "nasa-app-ef65c.firebaseapp.com",
    databaseURL: "https://nasa-app-ef65c.firebaseio.com",
    projectId: "nasa-app-ef65c",
    storageBucket: "nasa-app-ef65c.appspot.com",
    messagingSenderId: "834959538699",
    appId: "1:834959538699:web:977ff0ff74ffcd06ce650e"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();


export {
    db,
    firebase
}