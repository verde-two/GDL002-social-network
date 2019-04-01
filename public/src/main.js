function checkIn() {
  let textEmail = document.getElementById("email").value;
  let textPassword = document.getElementById("password").value;
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
}
function singIn() {
  let textEmail1 = document.getElementById("email").value;
  let textPassword1 = document.getElementById("password").value;
  firebase
    .auth()
    .signInWithEmailAndPassword(textEmail1, textPassword1)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorCode, errorMessage);
    });
}
function observer() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      observing();
      // User is signed in.
      console.log(user);
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
    }
  });
}
observer();

function observing() {
  let acces=document.getElementById("totalaccses");
  let screens= document.getElementById("screen1");
  screens.style.display= "none";
  acces.style.display= "block";
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
const btnGoogle= document.getElementById("google");

 btnGoogle.addEventListener("click", function(){

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
 
 });

