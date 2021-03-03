// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD8WhB8J8Wu57FHchTrJzvKp56-M_gFkkw",
    authDomain: "slack-clone-435e6.firebaseapp.com",
    projectId: "slack-clone-435e6",
    storageBucket: "slack-clone-435e6.appspot.com",
    messagingSenderId: "643447977013",
    appId: "1:643447977013:web:2562416ad04eb2db2bad7c",
    measurementId: "G-XD6CWSQNL8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };