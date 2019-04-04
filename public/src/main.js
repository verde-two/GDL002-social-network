window.main ={
  checkIn:(textEmail, textPassword)=> {
  firebase
    .auth()
    .createUserWithEmailAndPassword(textEmail, textPassword)
    .then(function(){
      verific()
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorCode, errorMessage);
    });
},

 singIn:(textEmail1, textPassword1)=> {
  firebase
    .auth()
    .signInWithEmailAndPassword(textEmail1, textPassword1)
    .catch(function(error) {
      document.getElementById("emailOK").innerHTML = error.message;
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
     console.log(errorMessage, errorCode )
    });
  },
  closeSession:()=>{
    firebase.auth().signOut().then(function() {
      location.reload();
      // Sign-out successful.
      console.log("listo");
    }).catch(function(error) {
      // An error happened.
      console.log(error);
    });
  },
  googleSingIn:()=>{

  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  }); 
 
 },
 
}

function verific(){
  
  var user = firebase.auth().currentUser;
user.sendEmailVerification().then(function() {
  // Email sent.
  console.log("enviando correo..");
}).catch(function(error) {
  // An error happened.
  console.log(error);
});
}

  

