 import firebase from 'firebase'
 import firestore from 'firebase/firestore'
 
 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyAVnlhpHUmge4Vt0FVCvFiWWOTsgi7jVUg",
  authDomain: "udemy-ninja-chat-2eff1.firebaseapp.com",
  databaseURL: "https://udemy-ninja-chat-2eff1.firebaseio.com",
  projectId: "udemy-ninja-chat-2eff1",
  storageBucket: "udemy-ninja-chat-2eff1.appspot.com",
  messagingSenderId: "1078769619674"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore()
