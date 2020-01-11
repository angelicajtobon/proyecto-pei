var db = firebase.firestore();


window.onload = function generarPei()
{

	var indicador
	//Consultando Identificacion
	db.collection("identificacion").get().then((querySnapshot) => {				
		querySnapshot.forEach((doc) => {			
			console.log(`${doc.id} => ${doc.data()}`);					
			indicador = `${doc.data().institucionNombre}`
						
			if (indicador != "undefined"){
				document.getElementById('codigoDane').innerHTML = `${doc.data().codigoDaneGlobal}`
				document.getElementById('institucionNombre').innerHTML = `${doc.data().institucionNombre}`
				document.getElementById('reseña').innerHTML = `${doc.data().reseña}`
				document.getElementById('ubicacion').innerHTML =`${doc.data().ubicacion}`
				document.getElementById('himno').innerHTML	= `${doc.data().himno}`
				document.getElementById('liderazgo').innerHTML = `${doc.data().liderazgo}`
				console.log (id)
					
				}	
					  		
			});
				

			})
			.catch(function(error) {
				console.log("Error getting documents: ", error);
			});
		
	//Consultando horizonte institucional
	db.collection("horizonteInstitucional").get().then((querySnapshot) => {				
		querySnapshot.forEach((doc) => {			
		console.log(`${doc.id} => ${doc.data()}`);					
		indicador = `${doc.data().mision}`
						
			if (indicador != "undefined"){
				document.getElementById('mision').innerHTML = `${doc.data().mision}`
				document.getElementById('vision').innerHTML = `${doc.data().vision}`
				document.getElementById('principios').innerHTML = `${doc.data().principios}`
				document.getElementById('filosofia').innerHTML = `${doc.data().filosofia}`
				document.getElementById('culturaInstitucional').innerHTML = `${doc.data().culturaInstitucional}`
				console.log (id)						
				
								
			}	
								
			});
					

		})
		.catch(function(error) {
			console.log("Error getting documents: ", error);
		});

	//consultando Gestion directiva
	db.collection("gestionDirectiva").get().then((querySnapshot) => {				
		querySnapshot.forEach((doc) => {			
		console.log(`${doc.id} => ${doc.data()}`);					
		indicador = `${doc.data().metasInstitucionales}`
						
		if (indicador != "undefined"){
			
			document.getElementById('metasInstitucionales').innerHTML = `${doc.data().metasInstitucionales}`
			document.getElementById('politicasInclusion').innerHTML = `${doc.data().politicasInclusion}`
			document.getElementById('politicasArticulacion').innerHTML = `${doc.data().politicasArticulacion}`
			document.getElementById('estrategiaPedagogica').innerHTML = `${doc.data().estrategiaPedagogica}`
			document.getElementById('consejoDirectivo').innerHTML = `${doc.data().consejoDirectivo}`
			document.getElementById('consejoAcademico').innerHTML = `${doc.data().consejoAcademico}`
			document.getElementById('consejoEvaluacion').innerHTML = `${doc.data().consejoEvaluacion}`
			document.getElementById('comiteConvivencia').innerHTML = `${doc.data().comiteConvivencia}`
			document.getElementById('consejoEstudiantil').innerHTML = `${doc.data().consejoEstudiantil}`
			document.getElementById('consejoPadres').innerHTML = `${doc.data().consejoPadres}`
			document.getElementById('mecanismosComunicacion').innerHTML = `${doc.data().mecanismosComunicacion}`
			document.getElementById('reconocimientoLogros').innerHTML = `${doc.data().reconocimientoLogros}`
			document.getElementById('induccion').innerHTML = `${doc.data().induccion}`
			document.getElementById('planEstimulos').innerHTML = `${doc.data().planEstimulos}`
			document.getElementById('reglasHigienePersonal').innerHTML = `${doc.data().reglasHigienePersonal}`
			document.getElementById('criteriosRespeto').innerHTML = `${doc.data().criteriosRespeto}`
			document.getElementById('pautasComportamiento').innerHTML = `${doc.data().pautasComportamiento}`
			document.getElementById('normasConducta').innerHTML = `${doc.data().normasConducta}`
			document.getElementById('procedimientosConflictos').innerHTML = `${doc.data().procedimientosConflictos}`
			document.getElementById('pautasPresentacionPersonal').innerHTML = `${doc.data().pautasPresentacionPersonal}`
			document.getElementById('definicionSanciones').innerHTML = `${doc.data().definicionSanciones}`
			document.getElementById('eleccionRepresentantes').innerHTML = `${doc.data().eleccionRepresentantes}`
			document.getElementById('calidadAlimentacion').innerHTML = `${doc.data().calidadAlimentacion}`
			document.getElementById('funcionamientoComunicacion').innerHTML = `${doc.data().funcionamientoComunicacion}`
			document.getElementById('provisionMaterialDidactico').innerHTML = `${doc.data().provisionMaterialDidactico}`
			document.getElementById('usoBibliobanco').innerHTML = `${doc.data().usoBibliobanco}`
			document.getElementById('actividadesExtracurriculares').innerHTML = `${doc.data().actividadesExtracurriculares}`
			document.getElementById('autoevaluacionInstitucional').innerHTML = `${doc.data().autoevaluacionInstitucional}`		
		
			console.log (`${doc.id}`)
						
		}	
					  		
		});
				

		})
		.catch(function(error) {
			console.log("Error getting documents: ", error);
		});
	
	
	//consultando Gestion pedagogica
	
	db.collection("gestionPedagogica").get().then((querySnapshot) => {				
		querySnapshot.forEach((doc) => {			
		console.log(`${doc.id} => ${doc.data()}`);					
		indicador = `${doc.data().modeloPedagogico }`
						
		if (indicador != "undefined"){
			
			document.getElementById('modeloPedagogico').innerHTML = `${doc.data().modeloPedagogico }`
			document.getElementById('jornadaEscolar').innerHTML = `${doc.data().jornadaEscolar }`
			document.getElementById('criteriosEvaluacion').innerHTML = `${doc.data().criteriosEvaluacion }`
			document.getElementById('escalaValoracion').innerHTML = `${doc.data().escalaValoracion }`
			document.getElementById('estrategiasValoracion').innerHTML = `${doc.data().estrategiasValoracion }`
			document.getElementById('accionesSeguimiento').innerHTML = `${doc.data().accionesSeguimiento }`
			document.getElementById('procesosAutoevaluacion').innerHTML = `${doc.data().procesosAutoevaluacion }`
			document.getElementById('estategiasApoyo').innerHTML = `${doc.data().estategiasApoyo }`
			document.getElementById('accionesCumplimientoEvaluacion').innerHTML = `${doc.data().accionesCumplimientoEvaluacion }`
			document.getElementById('periodicidadInformes').innerHTML = `${doc.data().periodicidadInformes }`
			document.getElementById('estructuraInformes').innerHTML = `${doc.data().estructuraInformes }`
			document.getElementById('resolucionReclamos').innerHTML = `${doc.data().resolucionReclamos }`
			document.getElementById('participacionComunidadMecanismos').innerHTML = `${doc.data().participacionComunidadMecanismos }`
			document.getElementById('proyectosTransversales').innerHTML = `${doc.data().proyectosTransversales }`
			document.getElementById('tiemposAprendizaje').innerHTML = `${doc.data().tiemposAprendizaje }`
			document.getElementById('seguimientoResultados').innerHTML = `${doc.data().seguimientoResultados }`			
		
			console.log (`${doc.id}`)
						
		}	
					  		
		});
				

		})
		.catch(function(error) {
			console.log("Error getting documents: ", error);
		});

	//Consultando gestion administrativa y de talento humano
	db.collection("gestionAdministrativa").get().then((querySnapshot) => {				
		querySnapshot.forEach((doc) => {			
		console.log(`${doc.id} => ${doc.data()}`);					
		indicador = `${doc.data().procesoMatricula }`
						
		if (indicador != "undefined"){
			
			document.getElementById('procesoMatricula').innerHTML = `${doc.data().procesoMatricula }`
			document.getElementById('archivoAcademico').innerHTML = `${doc.data().archivoAcademico }`
			document.getElementById('registroEvaluacion').innerHTML = `${doc.data().registroEvaluacion }`
			document.getElementById('mantenimientoPlantaFisica').innerHTML = `${doc.data().mantenimientoPlantaFisica }`
			document.getElementById('suministroDotacion').innerHTML = `${doc.data().suministroDotacion }`
			document.getElementById('recursosAprendizaje').innerHTML = `${doc.data().recursosAprendizaje }`
			document.getElementById('seguridadProteccion').innerHTML = `${doc.data().seguridadProteccion }`
			document.getElementById('bienestarSocial').innerHTML = `${doc.data().bienestarSocial }`
			document.getElementById('talentoHumano').innerHTML = `${doc.data().talentoHumano }`
			document.getElementById('induccionDocentes').innerHTML = `${doc.data().induccionDocentes }`
			document.getElementById('asignacionAcademica').innerHTML = `${doc.data().asignacionAcademica }`
			document.getElementById('evaluacionDesempeño').innerHTML = `${doc.data().evaluacionDesempeño }`
			document.getElementById('estimulos').innerHTML = `${doc.data().estimulos }`
			document.getElementById('apoyoInvestigacion').innerHTML = `${doc.data().apoyoInvestigacion }`
			document.getElementById('bienestarTH').innerHTML = `${doc.data().bienestarTH }`
			document.getElementById('contabilidad').innerHTML = `${doc.data().contabilidad }`		
		
									
			idGestionAdministrativa = `${doc.id}`
			console.log (idGestionAdministrativa)
						
		}	
					  		
		});
				

		})
		.catch(function(error) {
			console.log("Error getting documents: ", error);
		});
		
	
	//consultando gestion de la comunidad
	db.collection("gestionComunidad").get().then((querySnapshot) => {				
		querySnapshot.forEach((doc) => {			
		console.log(`${doc.id} => ${doc.data()}`);					
		indicador = `${doc.data().egresados }`
						
		if (indicador != "undefined"){
			
			document.getElementById('egresados').innerHTML = `${doc.data().egresados }`
			document.getElementById('atencionVulnerabilidad').innerHTML = `${doc.data().atencionVulnerabilidad }`
			document.getElementById('atencionEtnias').innerHTML = `${doc.data().atencionEtnias }`
			document.getElementById('escuelaPadres').innerHTML = `${doc.data().escuelaPadres }`
			document.getElementById('servicioSocial').innerHTML = `${doc.data().servicioSocial }`
			document.getElementById('participacionComunidad').innerHTML = `${doc.data().participacionComunidad }`
			document.getElementById('prevencionRiesgosSociales').innerHTML = `${doc.data().prevencionRiesgosSociales }`

			console.log (`${doc.id}`)
						
		}	
					  		
		});
				

		})
		.catch(function(error) {
			console.log("Error getting documents: ", error);
		});
}