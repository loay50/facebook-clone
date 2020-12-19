import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyACWK3iEeEI6QhewvfV9M6tpkWV3394uxo",
    authDomain: "facebook-2a3d7.firebaseapp.com",
    projectId: "facebook-2a3d7",
    storageBucket: "facebook-2a3d7.appspot.com",
    messagingSenderId: "515893768904",
    appId: "1:515893768904:web:167396dbbb859f20172bfd"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;