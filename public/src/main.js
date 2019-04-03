
window.main = {
  checkIn: (textEmail, textPassword) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(textEmail, textPassword)
      .then(function () {
        verific()
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode, errorMessage);
      });
  },

  singIn: (textEmail1, textPassword1) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(textEmail1, textPassword1)
      .catch(function (error) {
        document.getElementById("emailOK").innerHTML = error.message;
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorMessage, errorCode)
      });
  },
  observer: () => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        document.getElementById("screen2").style.display = "block"
        document.getElementById("screen1").style.display = "none"
        console.log("existe usuario");
        // User is signed in.
        console.log(user);
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        document.getElementById("img").innerHTML = "<img src='" + photoURL + "'class='pik'>";
        document.getElementById("nombre").innerHTML = displayName
        // ...
        console.log("no existe usuario");
      } else {
      }
    });
  },
observer();,



verific:()=>{
  var user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function () {
    // Email sent.
    console.log("enviando correo..");
  }).catch(function (error) {
    // An error happened.
    console.log(error);
  });
},
btnClose:() =>{
  firebase.auth().signOut().then(function () {
    location.reload();
    // Sign-out successful.
    console.log("listo");
  }).catch(function (error) {
    // An error happened.
    console.log(error);
  })
},

btnGoogle:()=>{

  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function (error) {
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
