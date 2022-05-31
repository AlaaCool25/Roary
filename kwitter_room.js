
//ADD YOUR FIREBASE LINKS HERE
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
    User_Name = localStorage.getItem("User_Name");
    document.getElementById("user_name").innerHTML = "Welcome " + User_Name + " !";
    function AddRoom()
    {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name" 
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
    }

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-"+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row; });
      //End code
      });};
getData();

function redirectToRoomName(name) 
{ 
 console.log(name); 
 localStorage.setItem("room_name", name); 
 window.location = "kwitter_page.html"; 
}  

function logOut() 
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}