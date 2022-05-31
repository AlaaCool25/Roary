//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAaChBcti-CUhpYnQnMDQorrhU5jme-F5g",
  authDomain: "roary-38a49.firebaseapp.com",
  databaseURL: "https://roary-38a49-default-rtdb.firebaseio.com",
  projectId: "roary-38a49",
  storageBucket: "roary-38a49.appspot.com",
  messagingSenderId: "1040663095660",
  appId: "1:1040663095660:web:0a5f3feb12c38b8d88ab49"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("User_Name");
    room_name = localStorage.getItem("room_name");
    function send() 
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
          });
          document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
