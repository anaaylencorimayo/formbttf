
//DEFINIMOS LA INFO:
const nombre= document.getElementById("nombre")
const email=document.getElementById("email")
const apellido = document.getElementById("apellido")
const numerodecelular= document.getElementById ("numero")
const form=document.getElementById("form")

let apellidoError = document.getElementById("apellidoError");
let nombreError = document.getElementById("nombreError");
let emailError= document.getElementById("emailError");
let numeroError= document.getElementById("numeroError");

const regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//ESTO ES PARA VALIDAR EL MAIL, mediante expresiones regulares. Se explican aca: https://www.w3resource.com/javascript/form/email-validation.php

const enviar=document.getElementById("soloenviar")

//FORMULARIO DE SUSCRIPCIÓN
//NO PERMITE QUE EL FOMRULARIO SE ENVIE VACIO
//SOLO PASA EL EVENTO DEL "CLICK" EN ENVIAR SI SE CUMPLEN LAS CONDIONES:
enviar.addEventListener("click",()=>{ 
    nombreError.textContent = "";
    apellidoError.textContent = "";
    emailError.textContent = "";
    numeroError.textContent = "";

    if (nombre.value.length=== 0 || email.value.length===0 || apellido.value.length=== 0 || numerodecelular.value.length > 10 ){
       alert("Debe llenar todos los campos correctamente para enviar el fomulario");
    
      } else if (nombre.value.length < 3) {
        nombreError.textContent = "Nombre no válido";   

      } else if (apellido.value.length < 2) {
        apellidoError.textContent = "Apellido no válido";
  
      } else if (numerodecelular.value.length !==10) {
        numeroError.textContent = "Numero Incompleto";
   
      } else if (!regexEmail.test(email.value)) {
        emailError.textContent = "Correo electrónico no válido";

      }else{
        alert("El formulario se ha enviado exitosamente.");
    }
  });

//FIN DEL FOMRULARIO DE SUSCRIPCIÓN

//FORMULARIO DE CANCELACION
const nombre2= document.getElementById("nombre2")
const email2=document.getElementById("email2")
const apellido2 = document.getElementById("apellido2")

let apellidoError2 = document.getElementById("apellidoError2");
let nombreError2 = document.getElementById("nombreError2");
let emailError2 = document.getElementById("emailError2");

const enviar2=document.getElementById("soloenviar2")

enviar2.addEventListener("click",()=>{

  nombreError2.textContent = "";
  apellidoError2.textContent = ""; 

  if (nombre2.value.length== 0 || email2.value.length== 0 || apellido2.value.length== 0){
      alert("Debe llenar todos los campos correctamente para enviar el fomulario")

    } else if (nombre2.value.length < 3) {
      nombreError2.textContent = "Nombre no válido";
    } else if (apellido2.value.length < 2) {
      apellidoError2.textContent = "Apellido no válido";
    } else if (!regexEmail.test(email2.value)) {
      emailError2.textContent = "Correo electrónico no válido";   
    }else{
        alert("El formulario se ha enviado exitosamente.");   
  }
});

//HASTA ACA EL FORMULARIO DE CANCELACION


//OCULTAR Y MOSTRAR FORMULARIO DE CANCELACION

let abrir=document.querySelectorAll(".clickAqui")[0];
let formulario2=document.querySelectorAll(".formulario2")[0];
let caja2=document.querySelectorAll(".caja2")[0];
let cerrar=document.querySelectorAll(".cerrar")[0];


abrir.addEventListener("click",function(e){
    e.preventDefault();
    caja2.style.opacity="1";
    caja2.style.visibility="visible";
    caja2.style.position="relative";
});


cerrar.addEventListener("click",function(){
 
    caja2.style.opacity="0";
    caja2.style.visibility="hidden";

    if (window.innerWidth <= 768) {
      caja2.style.position = "fixed";
  } 
});
//FIN DEL OCULTAR Y MOSTRAR FORMULARIO DE CANCELACIÓN



