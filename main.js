function checkIn() {
  let textEmail = document.getElementById("email").value;
  let textPassword = document.getElementById("password").value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(textEmail, textPassword)
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
