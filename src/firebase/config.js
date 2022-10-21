import firebase from "firebase";
import firestore from "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmPdA34-IfZ9VVpNRDdUL-fNPRmlfHLlg",
  authDomain: "mymoney-e9981.firebaseapp.com",
  projectId: "mymoney-e9981",
  storageBucket: "mymoney-e9981.appspot.com",
  messagingSenderId: "694950305029",
  appId: "1:694950305029:web:5bb958fb5461ea2b8cab6c",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init firestore
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
