var firebaseConfig = {
      apiKey: "AIzaSyBtFXhkF6nD6ZJUhkqgFHqgi1C_SWjrs3w",
      authDomain: "c-94-660b2.firebaseapp.com",
      databaseURL: "https://c-94-660b2-default-rtdb.firebaseio.com",
      projectId: "c-94-660b2",
      storageBucket: "c-94-660b2.appspot.com",
      messagingSenderId: "608030777502",
      appId: "1:608030777502:web:5dd7783158c1e516d39b8f"
};

function addRoom() {
      Room_names = document.getElementById("room_name").value;
      firebase.database().ref("/").child("room_name").update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html" ;
}


function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      };
getData();