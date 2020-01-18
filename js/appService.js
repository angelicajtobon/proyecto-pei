localStorage.contador=0;

async function servicio(url, metodo, parametros?){

	var data = "";

	try{
		
		var token = localStorage.getItem('token');
		var headers = new Headers({
			"token-auth" : token,
			"username" : username
		});
		
		var miInit = { 
			   method: metodo,
               headers: headers,
               mode: 'cors',
               cache: 'default' 
           };


		data = await fetch(url,miInit);
		
		
	}catch (E){
		if(E.status == 401 && localStorage.contador <= 3){
			const token = servicio.call(login,metodo,parametros);
			localStorage.setItem("token", token);
			localStorage.contador++;
		
		}else{
			throw new Error(E);
			window.location.href="./login";
		}
	}

	return data;
}