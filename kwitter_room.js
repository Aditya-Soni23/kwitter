var firebaseConfig = {
    apiKey: "AIzaSyCqYlYFhhJvVoeRer08ATP46dwJP1epjHM",
    authDomain: "kwitter-ee8e8.firebaseapp.com",
    databaseURL: "https://kwitter-ee8e8-default-rtdb.firebaseio.com",
    projectId: "kwitter-ee8e8",
    storageBucket: "kwitter-ee8e8.appspot.com",
    messagingSenderId: "874341137932",
    appId: "1:874341137932:web:b52793c9cd114c6295f829"
  };
  
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  user_name = localStorage.getItem("user_name");

 document.getElementById("user_name").innerHTML = "Welcome " + user_name+ "!";
//ADD YOUR FIREBASE LINKS HERE


function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose :"adding room name"     
    });

    localStorage.setItem("room_name", room_name);
    window.location= "kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "<div><hr>";
document.getElementById("output").innerHTML += row;
    });
});
}


getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}