function servicio(url, metodo, parametros?){
	try{
		
		var token = localStorage.getItem('token');
		var headers = new Headers();
		
		var data = fetch({			
			headers: token
		});
		return data;
		
	}catch (E){
		if(E.status == 401){
			for(var i=0; i=3;i++){
				const token = servicio.call(login,metodo,parametros);
				localStorage.setItem("token", token);
			};
		}else{
			throw new Error(E);
			window.location.href="./login";
		}
	}
}