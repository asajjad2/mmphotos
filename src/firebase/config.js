// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA1Qwtc8K8JepaFlBr7wS1MEJPa9NNVZk",
  authDomain: "mmphotos-29297.firebaseapp.com",
  projectId: "mmphotos-29297",
  storageBucket: "mmphotos-29297.appspot.com",
  messagingSenderId: "91052292589",
  appId: "1:91052292589:web:eee8baec25963114dd8fe4",
  measurementId: "G-478PBFZ2PH"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const projectFireStore = app.firestore();
const projectStorage = app.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFireStore, timestamp };
