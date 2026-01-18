import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

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



  const auth = getAuth(app);
  
document.getElementById("signUp").addEventListener("click", signUp);
function signUp() {
  const email = document.getElementById("email").value.trim();
  //const name = document.getElementById("name").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorElement = document.getElementById("error");

 createUserWithEmailAndPassword(auth, email, password).catch((e) => {
    errorElement.textContent = e.message;
    alert(e.message);
    
  });
  alert("Signed Up");

  errorElement.textContent = "";

}

document.getElementById("signIn").addEventListener("click", signIn);
function signIn() {
    const email = document.getElementById("email").value.trim();
  //const name = document.getElementById("name").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorElement = document.getElementById("error");

try {signInWithEmailAndPassword(auth, email, password)
  alert("Signed In" + email);
}catch(e) {
    errorElement.textContent = e.message;
    alert(e.message);
  };


  errorElement.textContent = "";

}

document.getElementById("signOut").addEventListener("click", signOut);
function signOut() {
  auth.signOut();
    alert("Signed Out");
 
}
// Navigation helpers


document.getElementById("switchToUser").addEventListener("click", switchToUser);
function switchToUser() {
  console.log("Switching to User Login");
  window.location.href = "user_login.html";
}
document.getElementById("switchToAdmin").addEventListener("click", switchToAdmin);
function switchToAdmin() {
  window.location.href = "admin_login.html";
  console.log("Switching to Admin Login");
}