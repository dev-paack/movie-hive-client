import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDF0VR7DKGdhtiG2VB-w2y7mpInlPYNMHY",
  authDomain: "movie-hive.firebaseapp.com",
  projectId: "movie-hive",
  storageBucket: "movie-hive.appspot.com",
  messagingSenderId: "631530788755",
  appId: "1:631530788755:web:edecc8f9121b53a063ba66"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }

export default firebase