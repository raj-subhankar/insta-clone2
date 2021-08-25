import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAzD37phHYxYDjIrIiub188soPRW0uh5kw",
  authDomain: "insta-clone2-4f0bc.firebaseapp.com",
  projectId: "insta-clone2-4f0bc",
  storageBucket: "insta-clone2-4f0bc.appspot.com",
  messagingSenderId: "991306622947",
  appId: "1:991306622947:web:3b3bd3d03a7a6f67ac22d6",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
