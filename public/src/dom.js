function prueba() {
    let textEmail1 = document.getElementById("email").value;
    let textPassword1 = document.getElementById("password").value;
    window.main.checkIn(textEmail1, textPassword1);
}
const btnchecIn= document.getElementById("buttonSingIn");
  btnchecIn.addEventListener("click", prueba );
    
  const prueba2 =()=>{
      let textEmail= document.getElementById("email").value;
      let textPassword = document.getElementById("password").value;
      window.main.checkIn(textEmail, textPassword);
  }
  const btnchecIn= document.getElementById("buttonLogin");
  btnchecIn.addEventListener("click", prueba2 );