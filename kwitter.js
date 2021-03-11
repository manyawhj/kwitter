function add_user(){
Name=document.getElementById("user_name").value;
localStorage.setItem("UserName",Name);
window.location="kwitter_room.html";
}

