import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBKjxQ8ZjacDt8HuA1y4-0ehfzJhKrKhak",
    authDomain: "reactappsunuotraukomis.firebaseapp.com",
    databaseURL: "https://reactappsunuotraukomis-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "reactappsunuotraukomis",
    storageBucket: "reactappsunuotraukomis.appspot.com",
    messagingSenderId: "532670822797",
    appId: "1:532670822797:web:a9e67dd9266c0b738ae5c4"
  };

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

export default firebase;

export { app, auth, db }
