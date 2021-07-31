import firebase from 'firebase'
require("@firebase/firestore")

  const firebaseConfig = {
  apiKey: "AIzaSyCWxZ_iA43oIG5wPdgLw5EJ9kKPbWu_EEk",
  authDomain: "story-hub-4c365.firebaseapp.com",
  projectId: "story-hub-4c365",
  storageBucket: "story-hub-4c365.appspot.com",
  messagingSenderId: "904871822234",
  appId: "1:904871822234:web:8bc7cae219c0064ccbf023"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default  firebase.firestore();