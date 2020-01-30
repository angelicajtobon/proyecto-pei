const axios = require("axios");

axios.get("https://jsonplaceholder.typicode.com/todos/1")
.then((res) => console.log(res));

firebase.initializeApp({
	apiKey: "AIzaSyBi39sOdFNIKDZGk_li1kaPaA7NmqoM58o",
    authDomain: "proyecto-pei-dd5d7.firebaseapp.com",
    databaseURL: "https://proyecto-pei-dd5d7.firebaseio.com",
    projectId: "proyecto-pei-dd5d7",
    storageBucket: "proyecto-pei-dd5d7.appspot.com",
    messagingSenderId: "487977469290",
    appId: "1:487977469290:web:0ffd26659394c61b"

  
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

//console.log(db)


function registrar(){
		  
        var nombre = document.getElementById('nombre').value
        var tipoID = document.getElementById('tipoID').value
        var identificacion = document.getElementById('identificacion').value
        var email = document.getElementById('email').value
        var institucion = document.getElementById('institucion').value
        var telefono = document.getElementById('telefono').value
        var departamento = document.getElementById('departamento').value
        var ciudad = document.getElementById('ciudad').value
        var contraseña= document.getElementById('contraseña').value
        var contraseñaConf= document.getElementById('contraseñaConf').value
		var nit= document.getElementById('nit').value
        
        if ((contraseña != "") && (nombre != "") && (tipoID != "") && (identificacion != "") && (email != "") && (institucion != "") && (telefono != "")&& (departamento != "") && (ciudad != "")){
          if(contraseña == contraseñaConf){
            
			
            db.collection("usuarios").add({
                nombre: nombre,
                tipoID: tipoID,
                identificacion: identificacion,
                email:email,
                institucion:institucion,
				nit:nit,
                telefono:telefono,
                departamento:departamento,
                ciudad:ciudad,
                contraseña:contraseña
                
            })
			.then(function(docRef) {
				console.log("entro");
                console.log("Document written with ID: ", docRef.id);		
				
                
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
            
			
            firebase.auth().createUserWithEmailAndPassword(email, contraseña).catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // ...
            console.log(errorCode+' '+errorMessage)
            }).then(function(){
			  enviarEmail();	

			});
			

            alert("Usuario Registrado");
			
			 document.getElementById('nombre').value=""
			 document.getElementById('tipoID').value=""
			 document.getElementById('identificacion').value=""
			 document.getElementById('email').value=""
			 document.getElementById('institucion').value=""
			 document.getElementById('nit').value=""
			 document.getElementById('telefono').value=""
			 document.getElementById('departamento').value=""
			 document.getElementById('ciudad').value=""
			 document.getElementById('contraseña').value=""
			 document.getElementById('contraseñaConf').value=""

              
            
        }else{
            alert("Las contraseñas no coinciden");
            
        }     
    }else{
        alert("Debe diligenciar todos los campos del formulario");
    }   
   
}



function ingresar(){
    
    var email = document.getElementById('email').value
    var contraseña = document.getElementById('contraseña').value
    if((email != "") && (contraseña != "") ){
        firebase.auth().signInWithEmailAndPassword(email, contraseña).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
            console.log(errorCode);
          var errorMessage = error.message;
            alert("Datos de inicio inválidos");
          // ...
        });
        
        observador();

    }else{
        alert("Introduce informacion de inicio");
    }
        
}




function observador(){

        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            console.log('existe usuario activo');
            
            // User is signed in.
            aparecer();
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            // ...
          } else {
            // User is signed out.
            // ...
              console.log('no existe usuario activo')
          }
        });   
}




function cerrarCesion(){
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      alert("Cerró cesión correctamente");
      location.href="index.html";  
    }).catch(function(error) {
      // An error happened.
        console.log("ha ocurrido un error");
    });
}

      
 
function aparecer(){
    location.href="principal.html";    
}           



function enviarEmail(){

	var user = firebase.auth().currentUser;
	user.sendEmailVerification().then(function() {
		// Email sent
		console.log("mensaje enviado")
	}).catch(function(error) {
		// An error happened.
				console.log("error")
	});
						
}  
