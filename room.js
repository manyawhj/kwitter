Name_u=localStorage.getItem("UserName");
document.getElementById("name_show").innerHTML="Welcome"+" "+Name_u;

var firebaseConfig = {
    apiKey: "AIzaSyB1zxfFFNBdfLe9WtZN60ZyNCwjyRSThck",
    authDomain: "kwitter-f19fd.firebaseapp.com",
    databaseURL: "https://kwitter-f19fd-default-rtdb.firebaseio.com",
    projectId: "kwitter-f19fd",
    storageBucket: "kwitter-f19fd.appspot.com",
    messagingSenderId: "1039240044960",
    appId: "1:1039240044960:web:d3316b2b6f727c217bc4c5"
  };
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
});});}

function add_room(){
  Room_names=document.getElementById("write_room").value;
  firebase.database().ref("/").child(Room_names).update({
  purpose:"adding Room Name"
  });
  localStorage.setItem("Room Name",Room_names);
  window.location="kwitter_project_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  
   console.log("Room Name-"+Room_names);
   row="<div class='room_name' id="+Room_names+ "onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML+=row;
   
  });});}
getData();
