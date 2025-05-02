const form = document.querySelector("form");
 form.addEventListener("submit",function(event) { 
    const email= document.getElementById("email").value ;
    const password =document .getElementById("passwd").value ;
      if (password.length <6 ){ 
         alert( "le mot de passe doit  contenir au moins 6 caracteres.") ;
         event.preventDefault() ;
      }
      if (!email.includes ("@")) { 
         alert ("veuillez entrer une adresse email Valide.")
      event.preventDefault();
      }   
   });