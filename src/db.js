import firebase from "firebase/app";
import "firebase/database";

const config = {
  // API KEY
  apiKey: "AIzaSyAPQEIMhdu5B41b05opa_4eALgkMaus8Bc",
  authDomain: "firevuechat-e5980.firebaseapp.com",
  projectId: "firevuechat-e5980",
  storageBucket: "firevuechat-e5980.appspot.com",
  messagingSenderId: "625978805108",
  appId: "1:625978805108:web:9ea4106fd7e1ab49e4ba21",
};

const db = firebase.initializeApp(config);
export default db;
