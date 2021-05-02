  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCLqflOJi9rgXsppieBFMn6EvHbh8AMA0c",
    authDomain: "onesearch-kids.firebase.com",
    databaseURL: "https://onesearch-kids-default-rtdb.firebaseio.com",
    projectId: "onesearch-kids",
    storageBucket: "onesearch-kids.appspot.com",
    messagingSenderId: "175270442053",
    appId: "1:175270442053:web:eb1d517908be88f2b55f2c",
    measurementId: "G-WYNB0B6C17"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Namaste  " + username + "!";


