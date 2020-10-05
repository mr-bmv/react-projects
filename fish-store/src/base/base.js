import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBJqNTDqe9rlQw-cJMw6UnumbZkz8Ainow",
  authDomain: "fish-menu-fed93.firebaseapp.com",
  databaseURL: "https://fish-menu-fed93.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
