import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-database.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDN2YNjopvLjB4jcHjTNwrhtfmGmODVPvA",
    authDomain: "uottahack8.firebaseapp.com",
    projectId: "uottahack8",
    storageBucket: "uottahack8.firebasestorage.app",
    messagingSenderId: "153574704001",
    appId: "1:153574704001:web:1bfc0433562eeaf274de80",
    measurementId: "G-XGM149Z2ZG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
