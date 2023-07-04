import {initializeApp} from 'firebase/app';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from 'firebase/auth';

import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "trip-treat.firebaseapp.com",
  projectId: "trip-treat",
  storageBucket: "trip-treat.appspot.com",
  messagingSenderId: "1050440000000",
  appId: "1:1050440000000:web:0000000000000000000000",
  measurementId: "G-0000000000"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const signIn = signInWithEmailAndPassword;
const signUp = createUserWithEmailAndPassword;
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

export {auth, signIn, signUp, googleProvider, db};