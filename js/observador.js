
//Observador

firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
	console.log('existe usuario activo');
				
	// User is signed in.
	var displayName = user.displayName;
	var email = user.email;

	// ...
	} else {

				  
		location.href="index.html"; 
		console.log('NO TIENE PERMISOS');
				  
		}
});   

