
var db = firebase.firestore();
var codigoDaneGlobal
var comprobacion = false 

//Mostrar mensaje guardado

function mostrarGuardar(container, continuar){
	
	container.insertAdjacentHTML('afterend', `<div class="modal-content ">
											  <center><h4>Guardado <i class="medium material-icons">check</i>
											  </h4></center></div>`);
	continuar.style.display = 'block';
}


//Guardar pestaña identificacion

function guardarIdentificacion(){
	
	
	var codigoDane = document.getElementById('codigoDane').value
	var institucionNombre = document.getElementById('institucionNombre').value
	var reseña = document.getElementById('reseña').value
	var ubicacion = document.getElementById('ubicacion').value
	var himno = document.getElementById('himno').value	
	var liderazgo = document.getElementById('liderazgo').value
	
	
	var container = document.getElementById('container');
	var continuar = document.getElementById('continuar');

	codigoDaneGlobal=codigoDane
	
	var codigoDaneConsulta
	if((reseña != "") && (ubicacion !="") && (himno != "") && (liderazgo != "") && (bandera != "")&& (codigoDaneGlobal != "")){
		
		 //validando existencia del registro
		 
		db.collection("identificacion").get().then((querySnapshot) => {				
		querySnapshot.forEach((doc) => {	
			for(var i=0; i<1;i++){
				var id= `${doc.id} => ${doc.data()}`
				codigoDaneConsulta = `${doc.data().codigoDaneGlobal}`
				validador = `${doc.data().validador}`

				if ((codigoDaneConsulta == codigoDaneGlobal) ){	
			
					mostrarValidacion(container)
				
				}else {

					//guardar Imagen
					var storageRef = firebase.storage().ref();
					var bandera = document.getElementById('bandera').files[0];
					console.log(bandera);
					var thisRef = storageRef.child('identificacion/bandera.jpg');	
					thisRef.put(bandera).then(function(snapshot) {
						console.log('Uploaded a blob or file!');
					 });
					 
					
					//Guardar en BD		
					db.collection("identificacion").add({
						
						codigoDaneGlobal:codigoDaneGlobal,
						institucionNombre:institucionNombre,
						reseña: reseña,
						ubicacion: ubicacion,
						himno: himno,
						liderazgo:liderazgo
					})
					.then(function(docRef) {
						console.log("Documento Registrado con ID: ", docRef.id);
						mostrarGuardar(container, continuar)
						
						document.getElementById('reseña').value = ""
						document.getElementById('ubicacion').value = ""
						document.getElementById('himno').value = ""
						document.getElementById('liderazgo').value = ""


						
				})
				.catch(function(error) {
					console.error("Error al añadir el Documento: ", error);
				})
				
			}
			}
			
			
			});
		})
		.catch(function(error) {
			console.log("Error getting documents: ", error);
		});
		

		 

		 
		}else{
			alert("Debe diligenciar todos los campos del formulario");
		}
		

		
		
		
}

//Mostrar resultado de la validacion
function mostrarValidacion(container){
	
	container.insertAdjacentHTML('afterend', `<div class="modal-content "><center><h5>Información ya existe, no es posible guardar </h5></center>
											  <i class="medium material-icons">block</i></center>
											  <center><a class="waves-effect #00695c teal darken-3 btn botones" href="identificacion.html" > Aceptar</a>	
											  </div>`);
	
	
}


//46546564


//Guardar pestaña horizonte institucional

function guardarHorizonteInstitucional(){

	var mision = document.getElementById('mision').value
	var vision = document.getElementById('vision').value
	var principios = document.getElementById('principios').value	
	var filosofia = document.getElementById('filosofia').value
	var culturaInstitucional = document.getElementById('culturaInstitucional').value
	var container = document.getElementById('container');
	var continuar = document.getElementById('continuar');

	
	console.log(vision +""+ principios +""+filosofia+""+culturaInstitucional);
	
	if((mision != "") && (vision !="") && (principios != "") && (filosofia != "") && (culturaInstitucional != "")){
		

		//Guardar en BD		
		db.collection("horizonteInstitucional").add({
			mision: mision,
			vision: vision,
			principios: principios,
			filosofia:filosofia,
			culturaInstitucional:culturaInstitucional
		})
		.then(function(docRef) {
			console.log("Documento Registrado con ID: ", docRef.id);
			mostrarGuardar(container, continuar)
			document.getElementById('mision').value = ""
			document.getElementById('vision').value = ""
			document.getElementById('principios').value = ""
			document.getElementById('filosofia').value = ""
			document.getElementById('culturaInstitucional').value = ""

			
			
		})
		.catch(function(error) {
			console.error("Error al añadir el Documento: ", error);
		})
		
		}else{
			alert("Debe diligenciar todos los campos del formulario");
		}
	
	
}


//guardar pestaña Gestion directiva

function guardarGestionDirectiva(){
	
	
	var metasInstitucionales = document.getElementById('metasInstitucionales').value
	var politicasInclusion = document.getElementById('politicasInclusion').value
	var politicasArticulacion = document.getElementById('politicasArticulacion').value	
	var estrategiaPedagogica = document.getElementById('estrategiaPedagogica').value
	var consejoDirectivo = document.getElementById('consejoDirectivo').value
	var consejoAcademico = document.getElementById('consejoAcademico').value
	var consejoEvaluacion = document.getElementById('consejoEvaluacion').value
	var comiteConvivencia = document.getElementById('comiteConvivencia').value
	var consejoEstudiantil = document.getElementById('consejoEstudiantil').value
	var consejoPadres = document.getElementById('consejoPadres').value
	var mecanismosComunicacion = document.getElementById('mecanismosComunicacion').value
	var reconocimientoLogros = document.getElementById('reconocimientoLogros').value
	var induccion = document.getElementById('induccion').value
	var planEstimulos = document.getElementById('planEstimulos').value
	var reglasHigienePersonal = document.getElementById('reglasHigienePersonal').value
	var criteriosRespeto = document.getElementById('criteriosRespeto').value
	var pautasComportamiento = document.getElementById('pautasComportamiento').value
	var normasConducta = document.getElementById('normasConducta').value
	var procedimientosConflictos = document.getElementById('procedimientosConflictos').value
	var pautasPresentacionPersonal = document.getElementById('pautasPresentacionPersonal').value
	var definicionSanciones = document.getElementById('definicionSanciones').value
	var eleccionRepresentantes = document.getElementById('eleccionRepresentantes').value
	var calidadAlimentacion = document.getElementById('calidadAlimentacion').value
	var funcionamientoComunicacion = document.getElementById('funcionamientoComunicacion').value
	var provisionMaterialDidactico = document.getElementById('provisionMaterialDidactico').value
	var usoBibliobanco = document.getElementById('usoBibliobanco').value
	var actividadesExtracurriculares = document.getElementById('actividadesExtracurriculares').value

		
	var container = document.getElementById('container');
	var continuar = document.getElementById('continuar');

	
	if((metasInstitucionales != "") && (politicasInclusion !="") && (politicasArticulacion != "") && (estrategiaPedagogica != "") && (consejoDirectivo != "") && (consejoAcademico != "")
	&& (consejoEvaluacion != "") && (comiteConvivencia != "") && (consejoEstudiantil != "")&& (consejoPadres != "") && (mecanismosComunicacion != "")&& (reconocimientoLogros != "") 
	&& (induccion != "") && (planEstimulos != "") && (reglasHigienePersonal != "") && (criteriosRespeto != "") && (pautasComportamiento != "")  && (normasConducta != "") && (procedimientosConflictos != "")
	&& (pautasPresentacionPersonal != "") && (definicionSanciones != "") && (eleccionRepresentantes != "") && (calidadAlimentacion != "") && (funcionamientoComunicacion != "") && (provisionMaterialDidactico != "")
	&& (usoBibliobanco != "") && (actividadesExtracurriculares != "") && (autoevaluacionInstitucional != "")){
		 
		 //guardar Imagen
			var storageRef = firebase.storage().ref();
			var autoevaluacionInstitucional = document.getElementById('autoevaluacionInstitucional').files[0];
			console.log(autoevaluacionInstitucional);
			var thisRef = storageRef.child('gestionDirectiva/autoevaluacionInstitucional.jpg');	
			thisRef.put(autoevaluacionInstitucional).then(function(snapshot) {
				console.log('Uploaded a blob or file!');
			 });

		//Guardar en BD		
		db.collection("gestionDirectiva").add({
			
			metasInstitucionales :metasInstitucionales ,
			politicasInclusion :politicasInclusion ,
			politicasArticulacion :politicasArticulacion ,
			estrategiaPedagogica :estrategiaPedagogica ,
			consejoDirectivo :consejoDirectivo ,
			consejoAcademico :consejoAcademico ,
			consejoEvaluacion :consejoEvaluacion ,
			comiteConvivencia :comiteConvivencia ,
			consejoEstudiantil :consejoEstudiantil ,
			consejoPadres :consejoPadres ,
			mecanismosComunicacion :mecanismosComunicacion ,
			reconocimientoLogros :reconocimientoLogros ,
			induccion :induccion ,
			planEstimulos :planEstimulos ,
			reglasHigienePersonal :reglasHigienePersonal ,
			criteriosRespeto :criteriosRespeto ,
			pautasComportamiento :pautasComportamiento ,
			normasConducta :normasConducta ,
			procedimientosConflictos :procedimientosConflictos ,
			pautasPresentacionPersonal :pautasPresentacionPersonal ,
			definicionSanciones :definicionSanciones ,
			eleccionRepresentantes :eleccionRepresentantes ,
			calidadAlimentacion :calidadAlimentacion ,
			funcionamientoComunicacion :funcionamientoComunicacion ,
			provisionMaterialDidactico :provisionMaterialDidactico ,
			usoBibliobanco :usoBibliobanco ,
			actividadesExtracurriculares :actividadesExtracurriculares ,


		})
		.then(function(docRef) {
			console.log("Documento Registrado con ID: ", docRef.id);
			mostrarGuardar(container, continuar)
			document.getElementById('metasInstitucionales').value = ""
			document.getElementById('politicasInclusion').value = ""
			document.getElementById('politicasArticulacion').value = ""
			document.getElementById('estrategiaPedagogica').value = ""
			document.getElementById('consejoDirectivo').value = ""
			document.getElementById('consejoAcademico').value = ""
			document.getElementById('consejoEvaluacion').value = ""
			document.getElementById('comiteConvivencia').value = ""
			document.getElementById('consejoEstudiantil').value = ""
			document.getElementById('consejoPadres').value = ""
			document.getElementById('mecanismosComunicacion').value = ""
			document.getElementById('reconocimientoLogros').value = ""
			document.getElementById('induccion').value = ""
			document.getElementById('planEstimulos').value = ""
			document.getElementById('reglasHigienePersonal').value = ""
			document.getElementById('criteriosRespeto').value = ""
			document.getElementById('pautasComportamiento').value = ""
			document.getElementById('normasConducta').value = ""
			document.getElementById('procedimientosConflictos').value = ""
			document.getElementById('pautasPresentacionPersonal').value = ""
			document.getElementById('definicionSanciones').value = ""
			document.getElementById('eleccionRepresentantes').value = ""
			document.getElementById('calidadAlimentacion').value = ""
			document.getElementById('funcionamientoComunicacion').value = ""
			document.getElementById('provisionMaterialDidactico').value = ""
			document.getElementById('usoBibliobanco').value = ""
			document.getElementById('actividadesExtracurriculares').value = ""


		})
		.catch(function(error) {
			console.error("Error al añadir el Documento: ", error);
		})
		
		}else{
			alert("Debe diligenciar todos los campos del formulario");
		}
	
	
}


//Guardar pestaña gestion pedagogica

function guardarGestionPedagogica(){
	console.log("entro")

	
	var modeloPedagogico = document.getElementById('modeloPedagogico').value
	var jornadaEscolar = document.getElementById('jornadaEscolar').value	
	var criteriosEvaluacion = document.getElementById('criteriosEvaluacion').value
	var escalaValoracion = document.getElementById('escalaValoracion').value
	var estrategiasValoracion = document.getElementById('estrategiasValoracion').value
	var accionesSeguimiento = document.getElementById('accionesSeguimiento').value
	var procesosAutoevaluacion = document.getElementById('procesosAutoevaluacion').value
	var estategiasApoyo = document.getElementById('estategiasApoyo').value
	var accionesCumplimientoEvaluacion = document.getElementById('accionesCumplimientoEvaluacion').value
	var periodicidadInformes = document.getElementById('periodicidadInformes').value
	var estructuraInformes = document.getElementById('estructuraInformes').value
	var resolucionReclamos = document.getElementById('resolucionReclamos').value
	var participacionComunidadMecanismos = document.getElementById('participacionComunidadMecanismos').value
	var proyectosTransversales = document.getElementById('proyectosTransversales').value
	var tiemposAprendizaje = document.getElementById('tiemposAprendizaje').value	
	var seguimientoResultados = document.getElementById('seguimientoResultados').value



		
	var container = document.getElementById('container');
	var continuar = document.getElementById('continuar');



	if((modeloPedagogico != "") && (jornadaEscolar !="") && (criteriosEvaluacion != "") && (escalaValoracion != "") && (estrategiasValoracion != "")
		&& (accionesSeguimiento != "") && (procesosAutoevaluacion != "") && (estategiasApoyo != "") && (accionesCumplimientoEvaluacion != "")
		&& (periodicidadInformes != "") && (estructuraInformes != "") && (resolucionReclamos != "") && (participacionComunidadMecanismos != "") && (proyectosTransversales != "")
		&& (tiemposAprendizaje != "")&& (seguimientoResultados != "")){
		
		
		//guardar Imagenes
		var storageRef1 = firebase.storage().ref();
		var storageRef2 = firebase.storage().ref();
		var storageRef3 = firebase.storage().ref();
		var storageRef4 = firebase.storage().ref();
		
		var planEstudio = document.getElementById('planEstudio').files[0];
		var planeacionClase = document.getElementById('planeacionClase').files[0];
		var seguimientoAsistencia = document.getElementById('seguimientoAsistencia').files[0];
		var seguimientoDesercion = document.getElementById('seguimientoDesercion').files[0];
		
				
		var thisRefPlanEstudio = storageRef1.child('gestionPedagogica/planEstudio.jpg');		
		thisRefPlanEstudio.put(planEstudio).then(function(snapshot) {
			console.log('Uploaded Plan de estudio');
		 });
		 
		 var thisRefPlanClase = storageRef2.child('gestionPedagogica/planeacionClase.jpg');		
		thisRefPlanClase.put(planeacionClase).then(function(snapshot) {
			console.log('Uploaded planeacion de clase!');
		 });
		 
		var thisRefSegAsistencia = storageRef3.child('gestionPedagogica/seguimientoAsistencia.jpg');		
		thisRefSegAsistencia.put(seguimientoAsistencia).then(function(snapshot) {
			console.log('Uploaded Seguimiento asistencia!');
		 });
		 
		 var thisRefSegDesercion = storageRef4.child('gestionPedagogica/seguimientoDesercion.jpg');		
		thisRefSegDesercion.put(seguimientoDesercion).then(function(snapshot) {
			console.log('Uploaded seguimiento desercion!');
		 });
		 		 		 
		 
		
		//Guardar en BD		
		db.collection("gestionPedagogica").add({
			
			modeloPedagogico :modeloPedagogico ,
			jornadaEscolar :jornadaEscolar ,
			criteriosEvaluacion :criteriosEvaluacion ,
			escalaValoracion :escalaValoracion ,
			estrategiasValoracion :estrategiasValoracion ,
			accionesSeguimiento :accionesSeguimiento ,
			procesosAutoevaluacion :procesosAutoevaluacion ,
			estategiasApoyo :estategiasApoyo ,
			accionesCumplimientoEvaluacion :accionesCumplimientoEvaluacion ,
			periodicidadInformes :periodicidadInformes ,
			estructuraInformes :estructuraInformes ,
			resolucionReclamos :resolucionReclamos ,
			participacionComunidadMecanismos :participacionComunidadMecanismos ,
			proyectosTransversales :proyectosTransversales ,
			tiemposAprendizaje :tiemposAprendizaje ,
			seguimientoResultados :seguimientoResultados 

		})
		.then(function(docRef) {
			console.log("Documento Registrado con ID: ", docRef.id);
			mostrarGuardar(container, continuar)
			document.getElementById('modeloPedagogico').value = ""
			document.getElementById('jornadaEscolar').value = ""
			document.getElementById('criteriosEvaluacion').value = ""
			document.getElementById('escalaValoracion').value = ""
			document.getElementById('estrategiasValoracion').value = ""
			document.getElementById('accionesSeguimiento').value = ""
			document.getElementById('procesosAutoevaluacion').value = ""
			document.getElementById('estategiasApoyo').value = ""
			document.getElementById('accionesCumplimientoEvaluacion').value = ""
			document.getElementById('periodicidadInformes').value = ""
			document.getElementById('estructuraInformes').value = ""
			document.getElementById('resolucionReclamos').value = ""
			document.getElementById('participacionComunidadMecanismos').value = ""
			document.getElementById('proyectosTransversales').value = ""
			document.getElementById('tiemposAprendizaje').value = ""
			document.getElementById('seguimientoResultados').value = ""

			
		})
		.catch(function(error) {
			console.error("Error al añadir el Documento: ", error);
		})
		
		}else{
			alert("Debe diligenciar todos los campos del formulario");
		}
		

	
}


//Guardar pestaña gestion administrativa

function guardarGestionAdministrativa(){
	
	
	var procesoMatricula = document.getElementById('procesoMatricula').value
	var archivoAcademico = document.getElementById('archivoAcademico').value
	var registroEvaluacion = document.getElementById('registroEvaluacion').value
	var mantenimientoPlantaFisica = document.getElementById('mantenimientoPlantaFisica').value
	var suministroDotacion = document.getElementById('suministroDotacion').value
	var recursosAprendizaje = document.getElementById('recursosAprendizaje').value
	var seguridadProteccion = document.getElementById('seguridadProteccion').value
	var bienestarSocial = document.getElementById('bienestarSocial').value
	var talentoHumano = document.getElementById('talentoHumano').value
	var induccionDocentes = document.getElementById('induccionDocentes').value
	var asignacionAcademica = document.getElementById('asignacionAcademica').value
	var evaluacionDesempeño = document.getElementById('evaluacionDesempeño').value
	var estimulos = document.getElementById('estimulos').value
	var apoyoInvestigacion = document.getElementById('apoyoInvestigacion').value
	var bienestarTH = document.getElementById('bienestarTH').value
	var contabilidad = document.getElementById('contabilidad').value
	
	
	
	//imagenes
	var registroEvaluacionIMG = document.getElementById('registroEvaluacionIMG')
	var seguimientoEspacios = document.getElementById('seguimientoEspacios')
	
	
	
	var container = document.getElementById('container');
	var continuar = document.getElementById('continuar');



	if((procesoMatricula != "") && (archivoAcademico !="") && (registroEvaluacion != "") && (mantenimientoPlantaFisica != "") && (suministroDotacion != "")
		&& (recursosAprendizaje != "") && (seguridadProteccion != "") && (bienestarSocial != "") && (talentoHumano != "")
		&& (induccionDocentes != "") && (asignacionAcademica != "") && (evaluacionDesempeño != "") && (estimulos != "") && (apoyoInvestigacion != "")
		&& (bienestarTH != "")&& (contabilidad != "")){
		
		
		//guardar Imagenes
		var storageRef1 = firebase.storage().ref();
		var storageRef2 = firebase.storage().ref();
		

		var registroEvaluacionIMG = document.getElementById('registroEvaluacionIMG').files[0];
		var seguimientoEspacios = document.getElementById('seguimientoEspacios').files[0];
		

				
		var thisRefRegistroEvaluacion = storageRef1.child('gestionAdministrativa/registroEvaluacionIMG.jpg');		
		thisRefRegistroEvaluacion.put(registroEvaluacionIMG).then(function(snapshot) {
			console.log('Uploaded registro ev');
		 });
		 
		 var thisRefSeguimientoEspacios = storageRef2.child('gestionAdministrativa/seguimientoEspacios');		
		thisRefSeguimientoEspacios.put(seguimientoEspacios).then(function(snapshot) {
			console.log('Uploaded seguimiento espacios!');
		 });
		 
 		 
		 
		
		//Guardar en BD		
		db.collection("gestionAdministrativa").add({
			
			procesoMatricula:procesoMatricula,
			archivoAcademico:archivoAcademico,
			registroEvaluacion:registroEvaluacion,
			mantenimientoPlantaFisica:mantenimientoPlantaFisica,
			suministroDotacion:suministroDotacion,
			recursosAprendizaje:recursosAprendizaje,
			seguridadProteccion:seguridadProteccion,
			bienestarSocial:bienestarSocial,
			talentoHumano:talentoHumano,
			induccionDocentes:induccionDocentes,
			asignacionAcademica:asignacionAcademica,
			evaluacionDesempeño:evaluacionDesempeño,
			estimulos:estimulos,
			apoyoInvestigacion:apoyoInvestigacion,
			bienestarTH:bienestarTH,
			contabilidad:contabilidad
		})
		.then(function(docRef) {
			console.log("Documento Registrado con ID: ", docRef.id);
			mostrarGuardar(container, continuar)
			document.getElementById('procesoMatricula').value = ""
			document.getElementById('archivoAcademico').value = ""
			document.getElementById('registroEvaluacion').value = ""
			document.getElementById('mantenimientoPlantaFisica').value = ""
			document.getElementById('suministroDotacion').value = ""
			document.getElementById('recursosAprendizaje').value = ""
			document.getElementById('seguridadProteccion').value = ""
			document.getElementById('bienestarSocial').value = ""
			document.getElementById('talentoHumano').value = ""
			document.getElementById('induccionDocentes').value = ""
			document.getElementById('asignacionAcademica').value = ""
			document.getElementById('evaluacionDesempeño').value = ""
			document.getElementById('estimulos').value = ""
			document.getElementById('apoyoInvestigacion').value = ""
			document.getElementById('bienestarTH').value = ""
			document.getElementById('contabilidad').value = ""

			
		})
		.catch(function(error) {
			console.error("Error al añadir el Documento: ", error);
		})
		
		}else{
			alert("Debe diligenciar todos los campos del formulario");
		}
	

	
	
}

//guardar pestaña gestion de la comunidad


function guardarGestionComunidad(){
	
	
	var egresados = document.getElementById('egresados').value
	var atencionVulnerabilidad = document.getElementById('atencionVulnerabilidad').value
	var atencionEtnias = document.getElementById('atencionEtnias').value
	var escuelaPadres = document.getElementById('escuelaPadres').value
	var servicioSocial = document.getElementById('servicioSocial').value
	var participacionComunidad = document.getElementById('participacionComunidad').value
	var prevencionRiesgosSociales = document.getElementById('prevencionRiesgosSociales').value
	
	
	var container = document.getElementById('container');
	var continuar = document.getElementById('continuar');



	if((egresados != "") && (atencionVulnerabilidad !="") && (atencionEtnias != "") && (escuelaPadres != "") && (servicioSocial != "")
		&& (participacionComunidad != "") && (participacionComunidad != "") && (prevencionRiesgosSociales != "") ){
		
		
	
		//Guardar en BD		
		db.collection("gestionComunidad").add({
			
			egresados:egresados,
			atencionVulnerabilidad:atencionVulnerabilidad,
			atencionEtnias:atencionEtnias,
			escuelaPadres:escuelaPadres,
			servicioSocial:servicioSocial,
			participacionComunidad:participacionComunidad,
			prevencionRiesgosSociales:prevencionRiesgosSociales

		})
		.then(function(docRef) {
			console.log("Documento Registrado con ID: ", docRef.id);
			mostrarGuardar(container, continuar)
			document.getElementById('egresados').value = ""
			document.getElementById('atencionVulnerabilidad').value = ""
			document.getElementById('atencionEtnias').value = ""
			document.getElementById('escuelaPadres').value = ""
			document.getElementById('servicioSocial').value = ""
			document.getElementById('participacionComunidad').value = ""
			document.getElementById('prevencionRiesgosSociales').value = ""

			
		})
		.catch(function(error) {
			console.error("Error al añadir el Documento: ", error);
		})
		
		}else{
			alert("Debe diligenciar todos los campos del formulario");
			
		}
	

}


//Consultar datos pestaña identificacion
var idIdentificacion

function consultarIdentificacion(){
			var indicador
			db.collection("identificacion").get().then((querySnapshot) => {				
				querySnapshot.forEach((doc) => {			
					console.log(`${doc.id} => ${doc.data()}`);					
					indicador = `${doc.data().institucionNombre}`
						
					if (indicador != "undefined"){
						document.getElementById('codigoDane').value = `${doc.data().codigoDaneGlobal}`
						document.getElementById('institucionNombre').value = `${doc.data().institucionNombre}`
						document.getElementById('reseña').value = `${doc.data().reseña}`
						document.getElementById('ubicacion').value =`${doc.data().ubicacion}`
						document.getElementById('himno').value	= `${doc.data().himno}`
						document.getElementById('liderazgo').value = `${doc.data().liderazgo}`
						
						idIdentificacion = `${doc.id}`
						console.log (id)
						
					}	
					  		
				});
				

			})
			.catch(function(error) {
				console.log("Error getting documents: ", error);
			});
		
}

//Guardar modificaciones de pestaña identificacion

function guardarIdentificacionModificacion(){
	
	var idLocal = idIdentificacion
	var codigoDaneGlobal = document.getElementById('codigoDane').value
	var institucionNombre = document.getElementById('institucionNombre').value
	var reseña = document.getElementById('reseña').value
	var ubicacion = document.getElementById('ubicacion').value
	var himno = document.getElementById('himno').value	
	var liderazgo = document.getElementById('liderazgo').value
	
	var container = document.getElementById('container');
	
		//actualizar imagenes//guardar Imagen
	var visor = document.getElementById('bandera').files[0]
	
	console.log(visor)
	
	if (visor != undefined){
		var storageRef = firebase.storage().ref();
		var bandera = document.getElementById('bandera').files[0];
		console.log(bandera);
		var thisRef = storageRef.child('identificacion/bandera.jpg');	
		thisRef.put(bandera).then(function(snapshot) {
			console.log('Uploaded a blob or file!');
		});
	}		
			 
	
	    //actualizando datos
        db.collection("identificacion").doc(idLocal).set({
            codigoDaneGlobal:codigoDaneGlobal,
			institucionNombre:institucionNombre,
			reseña: reseña,
			ubicacion: ubicacion,
			himno: himno,
			liderazgo:liderazgo
        })
        .then(function() {
            console.log("Document successfully updated!");
            document.getElementById('reseña').value = ""
			document.getElementById('ubicacion').value = ""
			document.getElementById('himno').value = ""
			document.getElementById('liderazgo').value = ""
			mostrarGuardarModificaciones(container)
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
}



//Consultar datos pestaña horizonte institucional

var idHorizonte

function consultarHorizonte(){
	
		var indicador
		db.collection("horizonteInstitucional").get().then((querySnapshot) => {				
			querySnapshot.forEach((doc) => {			
				console.log(`${doc.id} => ${doc.data()}`);	
				
				indicador = `${doc.data().mision}`
								
				if (indicador != "undefined"){
					document.getElementById('mision').value = `${doc.data().mision}`
					document.getElementById('vision').value = `${doc.data().vision}`
					document.getElementById('principios').value = `${doc.data().principios}`
					document.getElementById('filosofia').value = `${doc.data().filosofia}`
					document.getElementById('culturaInstitucional').value = `${doc.data().culturaInstitucional}`
											
					idHorizonte = `${doc.id}`
					console.log (idHorizonte)
								
				}	
								
			});
					

		})
		.catch(function(error) {
			console.log("Error getting documents: ", error);
		});
	
}


//Guardar modificaciones pestaña horizonte institucional

function guardarHorizonteInstitucionalModificacion(){
	
	var idLocal = idHorizonte
	var mision = document.getElementById('mision').value
	var vision = document.getElementById('vision').value
	var principios = document.getElementById('principios').value	
	var filosofia = document.getElementById('filosofia').value
	var culturaInstitucional = document.getElementById('culturaInstitucional').value
	var container = document.getElementById('container');

			 
	
	    //actualizando datos
        db.collection("horizonteInstitucional").doc(idLocal).set({
            mision: mision,
			vision: vision,
			principios: principios,
			filosofia:filosofia,
			culturaInstitucional:culturaInstitucional
        })
        .then(function() {
            console.log("Document successfully updated!");
            document.getElementById('mision').value = ""
			document.getElementById('vision').value = ""
			document.getElementById('principios').value = ""
			document.getElementById('filosofia').value = ""
			document.getElementById('culturaInstitucional').value = ""
			mostrarGuardarModificaciones(container)
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
}




//Consultar datos pestaña Gestion directiva


var idGestionDirectiva

function consultarGestionDirectiva(){
	
		var indicador
		db.collection("gestionDirectiva").get().then((querySnapshot) => {				
			querySnapshot.forEach((doc) => {	
			
				console.log(`${doc.id} => ${doc.data()}`);	
				
				indicador = `${doc.data().metasInstitucionales}`
					
				if (indicador != "undefined"){
										
					idGestionDirectiva = `${doc.id}`
					console.log (idGestionDirectiva)
					
					document.getElementById('metasInstitucionales').value = `${doc.data().metasInstitucionales}`
					document.getElementById('politicasInclusion').value = `${doc.data().politicasInclusion}`
					document.getElementById('politicasArticulacion').value = `${doc.data().politicasArticulacion}`
					document.getElementById('estrategiaPedagogica').value = `${doc.data().estrategiaPedagogica}`
					document.getElementById('consejoDirectivo').value = `${doc.data().consejoDirectivo}`
					document.getElementById('consejoAcademico').value = `${doc.data().consejoAcademico}`
					document.getElementById('consejoEvaluacion').value = `${doc.data().consejoEvaluacion}`
					document.getElementById('comiteConvivencia').value = `${doc.data().comiteConvivencia}`
					document.getElementById('consejoEstudiantil').value = `${doc.data().consejoEstudiantil}`
					document.getElementById('consejoPadres').value = `${doc.data().consejoPadres}`
					document.getElementById('mecanismosComunicacion').value = `${doc.data().mecanismosComunicacion}`
					document.getElementById('reconocimientoLogros').value = `${doc.data().reconocimientoLogros}`
					document.getElementById('induccion').value = `${doc.data().induccion}`
					document.getElementById('planEstimulos').value = `${doc.data().planEstimulos}`
					document.getElementById('reglasHigienePersonal').value = `${doc.data().reglasHigienePersonal}`
					document.getElementById('criteriosRespeto').value = `${doc.data().criteriosRespeto}`
					document.getElementById('pautasComportamiento').value = `${doc.data().pautasComportamiento}`
					document.getElementById('normasConducta').value = `${doc.data().normasConducta}`
					document.getElementById('procedimientosConflictos').value = `${doc.data().procedimientosConflictos}`
					document.getElementById('pautasPresentacionPersonal').value = `${doc.data().pautasPresentacionPersonal}`
					document.getElementById('definicionSanciones').value = `${doc.data().definicionSanciones}`
					document.getElementById('eleccionRepresentantes').value = `${doc.data().eleccionRepresentantes}`
					document.getElementById('calidadAlimentacion').value = `${doc.data().calidadAlimentacion}`
					document.getElementById('funcionamientoComunicacion').value = `${doc.data().funcionamientoComunicacion}`
					document.getElementById('provisionMaterialDidactico').value = `${doc.data().provisionMaterialDidactico}`
					document.getElementById('usoBibliobanco').value = `${doc.data().usoBibliobanco}`
					document.getElementById('actividadesExtracurriculares').value = `${doc.data().actividadesExtracurriculares}`
					document.getElementById('autoevaluacionInstitucional').value = `${doc.data().autoevaluacionInstitucional}`		
				
											
					
								
				}	
								
		});
				

		})
		.catch(function(error) {
			console.log("Error getting documents: ", error);
		});
	
}

//guardar modificaciones gestion directiva

function guardarGestionDirectivaModificacion(){
	
	var idLocal = idGestionDirectiva
	var metasInstitucionales = document.getElementById('metasInstitucionales').value
	var politicasInclusion = document.getElementById('politicasInclusion').value
	var politicasArticulacion = document.getElementById('politicasArticulacion').value	
	var estrategiaPedagogica = document.getElementById('estrategiaPedagogica').value
	var consejoDirectivo = document.getElementById('consejoDirectivo').value
	var consejoAcademico = document.getElementById('consejoAcademico').value
	var consejoEvaluacion = document.getElementById('consejoEvaluacion').value
	var comiteConvivencia = document.getElementById('comiteConvivencia').value
	var consejoEstudiantil = document.getElementById('consejoEstudiantil').value
	var consejoPadres = document.getElementById('consejoPadres').value
	var mecanismosComunicacion = document.getElementById('mecanismosComunicacion').value
	var reconocimientoLogros = document.getElementById('reconocimientoLogros').value
	var induccion = document.getElementById('induccion').value
	var planEstimulos = document.getElementById('planEstimulos').value
	var reglasHigienePersonal = document.getElementById('reglasHigienePersonal').value
	var criteriosRespeto = document.getElementById('criteriosRespeto').value
	var pautasComportamiento = document.getElementById('pautasComportamiento').value
	var normasConducta = document.getElementById('normasConducta').value
	var procedimientosConflictos = document.getElementById('procedimientosConflictos').value
	var pautasPresentacionPersonal = document.getElementById('pautasPresentacionPersonal').value
	var definicionSanciones = document.getElementById('definicionSanciones').value
	var eleccionRepresentantes = document.getElementById('eleccionRepresentantes').value
	var calidadAlimentacion = document.getElementById('calidadAlimentacion').value
	var funcionamientoComunicacion = document.getElementById('funcionamientoComunicacion').value
	var provisionMaterialDidactico = document.getElementById('provisionMaterialDidactico').value
	var usoBibliobanco = document.getElementById('usoBibliobanco').value
	var actividadesExtracurriculares = document.getElementById('actividadesExtracurriculares').value
	
	console.log (idLocal)
	
	var visor = document.getElementById('autoevaluacionInstitucional').files[0]
	
	if (visor != undefined){
			
		var storageRef = firebase.storage().ref();
		var autoevaluacionInstitucional = document.getElementById('autoevaluacionInstitucional').files[0];
		console.log(autoevaluacionInstitucional);
		var thisRef = storageRef.child('gestionDirectiva/autoevaluacionInstitucional.jpg');	
		thisRef.put(autoevaluacionInstitucional).then(function(snapshot) {
			console.log('Uploaded a blob or file!');
		});
	}

	
	//actualizando datos
    db.collection("gestionDirectiva").doc(idLocal).set({
			metasInstitucionales :metasInstitucionales ,
			politicasInclusion :politicasInclusion ,
			politicasArticulacion :politicasArticulacion ,
			estrategiaPedagogica :estrategiaPedagogica ,
			consejoDirectivo :consejoDirectivo ,
			consejoAcademico :consejoAcademico ,
			consejoEvaluacion :consejoEvaluacion ,
			comiteConvivencia :comiteConvivencia ,
			consejoEstudiantil :consejoEstudiantil ,
			consejoPadres :consejoPadres ,
			mecanismosComunicacion :mecanismosComunicacion ,
			reconocimientoLogros :reconocimientoLogros ,
			induccion :induccion ,
			planEstimulos :planEstimulos ,
			reglasHigienePersonal :reglasHigienePersonal ,
			criteriosRespeto :criteriosRespeto ,
			pautasComportamiento :pautasComportamiento ,
			normasConducta :normasConducta ,
			procedimientosConflictos :procedimientosConflictos ,
			pautasPresentacionPersonal :pautasPresentacionPersonal ,
			definicionSanciones :definicionSanciones ,
			eleccionRepresentantes :eleccionRepresentantes ,
			calidadAlimentacion :calidadAlimentacion ,
			funcionamientoComunicacion :funcionamientoComunicacion ,
			provisionMaterialDidactico :provisionMaterialDidactico ,
			usoBibliobanco :usoBibliobanco ,
			actividadesExtracurriculares :actividadesExtracurriculares ,

    })
    .then(function() {
            console.log("Document successfully updated!");
            document.getElementById('metasInstitucionales').value = ""
			document.getElementById('politicasInclusion').value = ""
			document.getElementById('politicasArticulacion').value = ""
			document.getElementById('estrategiaPedagogica').value = ""
			document.getElementById('consejoDirectivo').value = ""
			document.getElementById('consejoAcademico').value = ""
			document.getElementById('consejoEvaluacion').value = ""
			document.getElementById('comiteConvivencia').value = ""
			document.getElementById('consejoEstudiantil').value = ""
			document.getElementById('consejoPadres').value = ""
			document.getElementById('mecanismosComunicacion').value = ""
			document.getElementById('reconocimientoLogros').value = ""
			document.getElementById('induccion').value = ""
			document.getElementById('planEstimulos').value = ""
			document.getElementById('reglasHigienePersonal').value = ""
			document.getElementById('criteriosRespeto').value = ""
			document.getElementById('pautasComportamiento').value = ""
			document.getElementById('normasConducta').value = ""
			document.getElementById('procedimientosConflictos').value = ""
			document.getElementById('pautasPresentacionPersonal').value = ""
			document.getElementById('definicionSanciones').value = ""
			document.getElementById('eleccionRepresentantes').value = ""
			document.getElementById('calidadAlimentacion').value = ""
			document.getElementById('funcionamientoComunicacion').value = ""
			document.getElementById('provisionMaterialDidactico').value = ""
			document.getElementById('usoBibliobanco').value = ""
			document.getElementById('actividadesExtracurriculares').value = ""
			mostrarGuardarModificaciones(container)
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
}



//Consultar datos pestaña gestion pedagogica


var idGestionPedagogica

function consultarGestionPedagogica(){
	
		var indicador
		db.collection("gestionPedagogica").get().then((querySnapshot) => {				
			querySnapshot.forEach((doc) => {			
				console.log(`${doc.id} => ${doc.data()}`);					
				indicador = `${doc.data().modeloPedagogico }`
								
				if (indicador != "undefined"){
					
					document.getElementById('modeloPedagogico').value = `${doc.data().modeloPedagogico }`
					document.getElementById('jornadaEscolar').value = `${doc.data().jornadaEscolar }`
					document.getElementById('criteriosEvaluacion').value = `${doc.data().criteriosEvaluacion }`
					document.getElementById('escalaValoracion').value = `${doc.data().escalaValoracion }`
					document.getElementById('estrategiasValoracion').value = `${doc.data().estrategiasValoracion }`
					document.getElementById('accionesSeguimiento').value = `${doc.data().accionesSeguimiento }`
					document.getElementById('procesosAutoevaluacion').value = `${doc.data().procesosAutoevaluacion }`
					document.getElementById('estategiasApoyo').value = `${doc.data().estategiasApoyo }`
					document.getElementById('accionesCumplimientoEvaluacion').value = `${doc.data().accionesCumplimientoEvaluacion }`
					document.getElementById('periodicidadInformes').value = `${doc.data().periodicidadInformes }`
					document.getElementById('estructuraInformes').value = `${doc.data().estructuraInformes }`
					document.getElementById('resolucionReclamos').value = `${doc.data().resolucionReclamos }`
					document.getElementById('participacionComunidadMecanismos').value = `${doc.data().participacionComunidadMecanismos }`
					document.getElementById('proyectosTransversales').value = `${doc.data().proyectosTransversales }`
					document.getElementById('tiemposAprendizaje').value = `${doc.data().tiemposAprendizaje }`
					document.getElementById('seguimientoResultados').value = `${doc.data().seguimientoResultados }`			
				
											
					idGestionPedagogica = `${doc.id}`
					console.log (idGestionPedagogica)
								
				}	
								
			});
				

		})
		.catch(function(error) {
			console.log("Error getting documents: ", error);
		});
	
}



//guardar modificaciones gestion directiva

function guardarGestionPedagogicaModificacion(){
	
	var idLocal = idGestionPedagogica
	var modeloPedagogico = document.getElementById('modeloPedagogico').value
	var jornadaEscolar = document.getElementById('jornadaEscolar').value	
	var criteriosEvaluacion = document.getElementById('criteriosEvaluacion').value
	var escalaValoracion = document.getElementById('escalaValoracion').value
	var estrategiasValoracion = document.getElementById('estrategiasValoracion').value
	var accionesSeguimiento = document.getElementById('accionesSeguimiento').value
	var procesosAutoevaluacion = document.getElementById('procesosAutoevaluacion').value
	var estategiasApoyo = document.getElementById('estategiasApoyo').value
	var accionesCumplimientoEvaluacion = document.getElementById('accionesCumplimientoEvaluacion').value
	var periodicidadInformes = document.getElementById('periodicidadInformes').value
	var estructuraInformes = document.getElementById('estructuraInformes').value
	var resolucionReclamos = document.getElementById('resolucionReclamos').value
	var participacionComunidadMecanismos = document.getElementById('participacionComunidadMecanismos').value
	var proyectosTransversales = document.getElementById('proyectosTransversales').value
	var tiemposAprendizaje = document.getElementById('tiemposAprendizaje').value	
	var seguimientoResultados = document.getElementById('seguimientoResultados').value
	 
	//actualizando imagenes
	
	
	var visor1 = document.getElementById('planEstudio').files[0]
	var visor2 = document.getElementById('planeacionClase').files[0]
	var visor3 = document.getElementById('seguimientoAsistencia').files[0]
	var visor4 = document.getElementById('seguimientoDesercion').files[0]

	if (visor1 != undefined){
		var storageRef1 = firebase.storage().ref();
		var planEstudio = document.getElementById('planEstudio').files[0];
		var thisRefPlanEstudio = storageRef1.child('gestionPedagogica/planEstudio.jpg');		
		thisRefPlanEstudio.put(planEstudio).then(function(snapshot) {
			console.log('Uploaded Plan de estudio');
		});
		 
	}
	
	
	if (visor2 != undefined){
		var storageRef2 = firebase.storage().ref();
		var planeacionClase = document.getElementById('planeacionClase').files[0];
		var thisRefPlanClase = storageRef2.child('gestionPedagogica/planeacionClase.jpg');		
		thisRefPlanClase.put(planeacionClase).then(function(snapshot) {
			console.log('Uploaded planeacion de clase!');
		});
	}
	
	if (visor3 != undefined){
		var storageRef3 = firebase.storage().ref();
		var seguimientoAsistencia = document.getElementById('seguimientoAsistencia').files[0];
		var thisRefSegAsistencia = storageRef3.child('gestionPedagogica/seguimientoAsistencia.jpg');		
		thisRefSegAsistencia.put(seguimientoAsistencia).then(function(snapshot) {
			console.log('Uploaded Seguimiento asistencia!');
		});
		 
	}
	
	if (visor4 != undefined){
		var storageRef4 = firebase.storage().ref();
		var seguimientoDesercion = document.getElementById('seguimientoDesercion').files[0];
		var thisRefSegDesercion = storageRef4.child('gestionPedagogica/seguimientoDesercion.jpg');		
		thisRefSegDesercion.put(seguimientoDesercion).then(function(snapshot) {
			console.log('Uploaded seguimiento desercion!');
		});
		
	}
	
	
	
	//actualizando datos
	
    db.collection("gestionPedagogica").doc(idLocal).set({
			modeloPedagogico :modeloPedagogico ,
			jornadaEscolar :jornadaEscolar ,
			criteriosEvaluacion :criteriosEvaluacion ,
			escalaValoracion :escalaValoracion ,
			estrategiasValoracion :estrategiasValoracion ,
			accionesSeguimiento :accionesSeguimiento ,
			procesosAutoevaluacion :procesosAutoevaluacion ,
			estategiasApoyo :estategiasApoyo ,
			accionesCumplimientoEvaluacion :accionesCumplimientoEvaluacion ,
			periodicidadInformes :periodicidadInformes ,
			estructuraInformes :estructuraInformes ,
			resolucionReclamos :resolucionReclamos ,
			participacionComunidadMecanismos :participacionComunidadMecanismos ,
			proyectosTransversales :proyectosTransversales ,
			tiemposAprendizaje :tiemposAprendizaje ,
			seguimientoResultados :seguimientoResultados 
    })
    .then(function() {
            console.log("Document successfully updated!");
            document.getElementById('modeloPedagogico').value = ""
			document.getElementById('jornadaEscolar').value = ""
			document.getElementById('criteriosEvaluacion').value = ""
			document.getElementById('escalaValoracion').value = ""
			document.getElementById('estrategiasValoracion').value = ""
			document.getElementById('accionesSeguimiento').value = ""
			document.getElementById('procesosAutoevaluacion').value = ""
			document.getElementById('estategiasApoyo').value = ""
			document.getElementById('accionesCumplimientoEvaluacion').value = ""
			document.getElementById('periodicidadInformes').value = ""
			document.getElementById('estructuraInformes').value = ""
			document.getElementById('resolucionReclamos').value = ""
			document.getElementById('participacionComunidadMecanismos').value = ""
			document.getElementById('proyectosTransversales').value = ""
			document.getElementById('tiemposAprendizaje').value = ""
			document.getElementById('seguimientoResultados').value = ""
			mostrarGuardarModificaciones(container)
			
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
}



//Consultar Gestion administrativa y de talento humano

var idGestionAdministrativa

function consultarGestionAdministrativa(){
	
		var indicador
		db.collection("gestionAdministrativa").get().then((querySnapshot) => {				
			querySnapshot.forEach((doc) => {			
				console.log(`${doc.id} => ${doc.data()}`);					
				indicador = `${doc.data().procesoMatricula }`
								
				if (indicador != "undefined"){
					
					document.getElementById('procesoMatricula').value = `${doc.data().procesoMatricula }`
					document.getElementById('archivoAcademico').value = `${doc.data().archivoAcademico }`
					document.getElementById('registroEvaluacion').value = `${doc.data().registroEvaluacion }`
					document.getElementById('mantenimientoPlantaFisica').value = `${doc.data().mantenimientoPlantaFisica }`
					document.getElementById('suministroDotacion').value = `${doc.data().suministroDotacion }`
					document.getElementById('recursosAprendizaje').value = `${doc.data().recursosAprendizaje }`
					document.getElementById('seguridadProteccion').value = `${doc.data().seguridadProteccion }`
					document.getElementById('bienestarSocial').value = `${doc.data().bienestarSocial }`
					document.getElementById('talentoHumano').value = `${doc.data().talentoHumano }`
					document.getElementById('induccionDocentes').value = `${doc.data().induccionDocentes }`
					document.getElementById('asignacionAcademica').value = `${doc.data().asignacionAcademica }`
					document.getElementById('evaluacionDesempeño').value = `${doc.data().evaluacionDesempeño }`
					document.getElementById('estimulos').value = `${doc.data().estimulos }`
					document.getElementById('apoyoInvestigacion').value = `${doc.data().apoyoInvestigacion }`
					document.getElementById('bienestarTH').value = `${doc.data().bienestarTH }`
					document.getElementById('contabilidad').value = `${doc.data().contabilidad }`		
				
											
					idGestionAdministrativa = `${doc.id}`
					console.log (idGestionAdministrativa)
								
				}	
								
			});
				

		})
		.catch(function(error) {
			console.log("Error getting documents: ", error);
		});
	
}


//guardar modificaciones gestion administrativa y de talento humano 

function guardarGestionAdministrativaModificacion(){
	
	var idLocal = idGestionAdministrativa
	var procesoMatricula = document.getElementById('procesoMatricula').value
	var archivoAcademico = document.getElementById('archivoAcademico').value
	var registroEvaluacion = document.getElementById('registroEvaluacion').value
	var mantenimientoPlantaFisica = document.getElementById('mantenimientoPlantaFisica').value
	var suministroDotacion = document.getElementById('suministroDotacion').value
	var recursosAprendizaje = document.getElementById('recursosAprendizaje').value
	var seguridadProteccion = document.getElementById('seguridadProteccion').value
	var bienestarSocial = document.getElementById('bienestarSocial').value
	var talentoHumano = document.getElementById('talentoHumano').value
	var induccionDocentes = document.getElementById('induccionDocentes').value
	var asignacionAcademica = document.getElementById('asignacionAcademica').value
	var evaluacionDesempeño = document.getElementById('evaluacionDesempeño').value
	var estimulos = document.getElementById('estimulos').value
	var apoyoInvestigacion = document.getElementById('apoyoInvestigacion').value
	var bienestarTH = document.getElementById('bienestarTH').value
	var contabilidad = document.getElementById('contabilidad').value

	 
	//actualizando imagenes
	
	var visor1 = document.getElementById('registroEvaluacionIMG').files[0]
	var visor2 = document.getElementById('seguimientoEspacios').files[0]
	
	
	

	if (visor1 != undefined){
		var storageRef1 = firebase.storage().ref();
		var registroEvaluacionIMG = document.getElementById('registroEvaluacionIMG').files[0];
		var thisRefRegistroEvaluacion = storageRef1.child('gestionAdministrativa/registroEvaluacionIMG.jpg');		
		thisRefRegistroEvaluacion.put(registroEvaluacionIMG).then(function(snapshot) {
			console.log('Uploaded registro ev');
		});
	
	}
	
	if (visor2 != undefined){
		var storageRef2 = firebase.storage().ref();
		var seguimientoEspacios = document.getElementById('seguimientoEspacios').files[0];
		var thisRefSeguimientoEspacios = storageRef2.child('gestionAdministrativa/seguimientoEspacios');		
	thisRefSeguimientoEspacios.put(seguimientoEspacios).then(function(snapshot) {
		console.log('Uploaded seguimiento espacios!');
	});
	}
	
	
	//actualizando datos
	
    db.collection("gestionAdministrativa").doc(idLocal).set({
		procesoMatricula:procesoMatricula,
		archivoAcademico:archivoAcademico,
		registroEvaluacion:registroEvaluacion,
		mantenimientoPlantaFisica:mantenimientoPlantaFisica,
		suministroDotacion:suministroDotacion,
		recursosAprendizaje:recursosAprendizaje,
		seguridadProteccion:seguridadProteccion,
		bienestarSocial:bienestarSocial,
		talentoHumano:talentoHumano,
		induccionDocentes:induccionDocentes,
		asignacionAcademica:asignacionAcademica,
		evaluacionDesempeño:evaluacionDesempeño,
		estimulos:estimulos,
		apoyoInvestigacion:apoyoInvestigacion,
		bienestarTH:bienestarTH,
		contabilidad:contabilidad		
		
	})
    .then(function() {
        console.log("Document successfully updated!");
		document.getElementById('procesoMatricula').value = ""
		document.getElementById('archivoAcademico').value = ""
		document.getElementById('registroEvaluacion').value = ""
		document.getElementById('mantenimientoPlantaFisica').value = ""
		document.getElementById('suministroDotacion').value = ""
		document.getElementById('recursosAprendizaje').value = ""
		document.getElementById('seguridadProteccion').value = ""
		document.getElementById('bienestarSocial').value = ""
		document.getElementById('talentoHumano').value = ""
		document.getElementById('induccionDocentes').value = ""
		document.getElementById('asignacionAcademica').value = ""
		document.getElementById('evaluacionDesempeño').value = ""
		document.getElementById('estimulos').value = ""
		document.getElementById('apoyoInvestigacion').value = ""
		document.getElementById('bienestarTH').value = ""
		document.getElementById('contabilidad').value = ""			
		document.getElementById('registroEvaluacionIMG').value = ""	
		document.getElementById('seguimientoEspacios').value = ""	
		document.getElementById('seguridadProteccionIMG').value = ""	
		mostrarGuardarModificaciones(container)
			
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
	
}



//consultar Gestion comunidad

var idGestionComunidad

function consultarGestioncomunidad(){
		var indicador
		db.collection("gestionComunidad").get().then((querySnapshot) => {				
			querySnapshot.forEach((doc) => {			
				console.log(`${doc.id} => ${doc.data()}`);					
				indicador = `${doc.data().egresados }`
								
				if (indicador != "undefined"){
					
					document.getElementById('egresados').value = `${doc.data().egresados }`
					document.getElementById('atencionVulnerabilidad').value = `${doc.data().atencionVulnerabilidad }`
					document.getElementById('atencionEtnias').value = `${doc.data().atencionEtnias }`
					document.getElementById('escuelaPadres').value = `${doc.data().escuelaPadres }`
					document.getElementById('servicioSocial').value = `${doc.data().servicioSocial }`
					document.getElementById('participacionComunidad').value = `${doc.data().participacionComunidad }`
					document.getElementById('prevencionRiesgosSociales').value = `${doc.data().prevencionRiesgosSociales }`
								
					idGestionComunidad = `${doc.id}`
					console.log (idGestionComunidad)
								
				}	
								
			});
					

		})
		.catch(function(error) {
			console.log("Error getting documents: ", error);
		});
}

//Guardar modificaciones gestion comunidad

function guardarGestionComunidadModificacion(){
	
	var idLocal = idGestionComunidad
	var egresados = document.getElementById('egresados').value
	var atencionVulnerabilidad = document.getElementById('atencionVulnerabilidad').value
	var atencionEtnias = document.getElementById('atencionEtnias').value
	var escuelaPadres = document.getElementById('escuelaPadres').value
	var servicioSocial = document.getElementById('servicioSocial').value
	var participacionComunidad = document.getElementById('participacionComunidad').value
	var prevencionRiesgosSociales = document.getElementById('prevencionRiesgosSociales').value

	 
	//actualizando datos
	
    db.collection("gestionComunidad").doc(idLocal).set({
		egresados:egresados,
		atencionVulnerabilidad:atencionVulnerabilidad,
		atencionEtnias:atencionEtnias,
		escuelaPadres:escuelaPadres,
		servicioSocial:servicioSocial,
		participacionComunidad:participacionComunidad,
		prevencionRiesgosSociales:prevencionRiesgosSociales
	})
    .then(function() {
        console.log("Document successfully updated!");
		document.getElementById('egresados').value = ""
		document.getElementById('atencionVulnerabilidad').value = ""
		document.getElementById('atencionEtnias').value = ""
		document.getElementById('escuelaPadres').value = ""
		document.getElementById('servicioSocial').value = ""
		document.getElementById('participacionComunidad').value = ""
		document.getElementById('prevencionRiesgosSociales').value = ""
		mostrarGuardarModificaciones(container)		
			
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
	
}



function mostrarGuardarModificaciones(container){
	
	container.insertAdjacentHTML('afterend', `<div class="modal-content "><center><h5> Informacion Modificada </h5>
											  <i class="medium material-icons">update</i></center>
											  <center><a class="waves-effect #00695c teal darken-3 btn botones" href="modificar.html" > Aceptar</a>	
											  </div>`);
}


function generarPei(estructuraPei){
	
		var printContents = document.getElementById('estructuraPei').innerHTML;
        w = window.open();
        w.document.write(printContents);
        w.document.close(); // necessary for IE >= 10
        w.focus(); // necessary for IE >= 10
		w.print();
		w.close();
        return true;
}
		
		






