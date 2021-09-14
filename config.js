import firebase from 'firebase'
require("@firebase/firestore")

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDmCUuIeVZMhNS7IR5d3OsGeRcreuwBYus",
  authDomain: "letsridec73project.firebaseapp.com",
  projectId: "letsridec73project",
  storageBucket: "letsridec73project.appspot.com",
  messagingSenderId: "813768784350",
  appId: "1:813768784350:web:8a239901bbf51d2ff3454f"
};


  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

