var firebaseConfig = {
    apiKey: "AIzaSyAYxyoHExYjHd9CEiXLT2nHuzZQR9yHCOU",
    authDomain: "nwitter-a8856.firebaseapp.com",
    databaseURL: "https://nwitter-a8856.firebaseio.com",
    projectId: "nwitter-a8856",
    storageBucket: "nwitter-a8856.appspot.com",
    messagingSenderId: "387772725307",
    appId: "1:387772725307:web:9f23871632c7a0bb05c41e",
    measurementId: "G-7HZSJVBGHE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   


    

  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome "+user_name+" !";
  
  function addRoom(){
  
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"room_name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="talk.html";
  }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         room_names = childKey;
        console.log(room_names);
        row="<div class='room_name' id="+room_names+" onclick='redirect(this.id)'>#"+room_names+"</div><hr>";
        document.getElementById("output").innerHTML+=row;     
  
        });});}
  getData();
  
  
  function redirect(name){
        console.log(name);
        localStorage.setItem("room_name",name);
  window.location="talk.html";
  document.getElementById("room_name").value="";
  }
  
  function logout(){
  
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location="login.html";
  
  }