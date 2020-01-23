const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); 
const path = require('path');


const indextInput = './htlm/index.html';
const indexOutput = 'index.html';

const identificacionInput = './htlm/identificacion.html';
const identificacionOutput = 'identificacion.html'

const identificacionModificarInput = './htlm/identificacionModificar.html';
const identificacionModificarOutput = 'identificacionModificar.html'

const horizonteInstitucionalInput = './htlm/horizonteInstitucional.html';
const horizonteInstitucionalOutput = 'horizonteInstitucional.html'

const horizonteInstitucionalModificarInput = './htlm/horizonteInstitucionalModificar.html';
const horizonteInstitucionalModificarOutput = 'horizonteInstitucionalModificar.html'

const gestionPedagogicaInput = './htlm/gestionPedagogica.html';
const gestionPedagogicaOutput = 'gestionPedagogica.html'

const gestionPedagogicaModificarInput = './htlm/gestionPedagogicaModificar.html';
const gestionPedagogicaModificarOutput = 'gestionPedagogicaModificar.html'

const gestionDirectivaInput = './htlm/gestionDirectiva.html';
const gestionDirectivaOutput = 'gestionDirectiva.html'

const gestionDirectivaModificarInput = './htlm/gestionDirectivaModificar.html';
const gestionDirectivaModificarOutput = 'gestionDirectivaModificar.html'

const gestionComunidadInput = './htlm/gestionComunidad.html';
const gestionComunidadOutput = 'gestionComunidad.html'

const gestionComunidadModificarInput = './htlm/gestionComunidadModificar.html';
const gestionComunidadModificarOutput = 'gestionComunidadModificar.html'

const gestionAdministrativaTHInput = './htlm/gestionAdministrativaTH.html';
const gestionAdministrativaTHOutput = 'gestionAdministrativaTH.html'

const gestionAdministrativaTHModificarInput = './htlm/gestionAdministrativaTHModificar.html';
const gestionAdministrativaTHModificarOutput = 'gestionAdministrativaTHModificar.html'

const principalInput = './htlm/principal.html';
const principalOutput = 'principal.html'

const modificarInput = './htlm/modificar.html';
const modificarOutput = 'modificar.html'

const registroInput = './htlm/registro.html';
const registroOutput = 'registro.html'



module.exports = {
	mode: "development",
	entry: {
		main: './js/datospei.js',
		app: './js/app.js',
		appService: './js/appService.js',   		
		generar: './js/generar.js',
		usuarios: './js/usuarios.js'
	},
	output: {
		path: path.resolve(__dirname, "dist")
	},

	plugins :[
	new HtmlWebpackPlugin({  
		filename: indexOutput, 
		template: indextInput,
		inject: true,
		hash: true,
		templateParameters: {
			nombre: 'Inicio',
			titulo: 'Bienvenido a la Plataforma de Administración de Proyectos Educativos',
			descripcion: 'Aquí podrá crear desde cero su P.E.I, o incorporar el documento ya creado de su Institución Educativa',
			iniciarSesion: 'Iniciar Sesion',
			email: 'Email',
			contraseña: 'Contraseña',
			olvidoUsuario: 'Olvide usuario y/o contraseña',
			recuperar: 'Recuperar datos',
			solicitarRegistro: 'Solicitar registro',
			idead: 'Instituto de Educación a Distancia'					
		}
	}),
	new HtmlWebpackPlugin({  
		filename: identificacionOutput, 
		template: identificacionInput,
		inject: true,
		hash: true,
		templateParameters: {
			nombre: 'Identificacion',
			titulo: 'Identificación',
			principal: 'Principal',
			identificacion: 'Identificación',
			horizonteInst: 'Horizonte Institucional',
			gestionDir: 'Gestión Directiva',
			gestionPed: 'Gestión Pedagógica',
			gestionATH: 'Gestión Administrativa y Talento Humano'
			gestionCom: 'Gestión de la Comunidad',
			cerrarCesion: 'Cerrar Cesion',
			nombreInst: 'Nombre de la Institución Educativa',
			codigoDane: 'Código DANE',
			ayudaResena: ' Cómo hacer una reseña',
			resenahist: 'Reseña Histórica',
			ubicacionGeo: 'Ubicación Geográfica',
			distintivo: 'Ingresar Escudo o Bandera',
			buscar: 'Buscar',
			himno: 'Himno',
			liderazgo: 'Liderazgo',
			guardar : 'Guardar',
			continuar: 'Continuar',
			idead: 'Instituto de Educación a Distancia',
			ingresar : 'Ingresar',
			registro: 'Registro'
		}
	}),
	new HtmlWebpackPlugin({  
		filename: identificacionModificarOutput, 
		template: identificacionModificarInput,
		inject: true,
		hash: true,
		templateParameters: {
			nombre: 'Modificar Identificacion',
			consultar: 'Consultar Identificación',
			titulo: 'Modificar Identificación',
			nombreInst: 'Nombre de la Institución Educativa',
			codigoDane: 'Código DANE',
			resenahist: 'Reseña Histórica',
			ubicacionGeo: 'Ubicación Geográfica',
			distintivo: 'Ingresar Escudo o Bandera',
			buscar: 'Buscar',
			himno: 'Himno',
			liderazgo: 'Liderazgo',
			guardar : 'Guardar Modificaciones',
			idead: 'Instituto de Educación a Distancia'
		}
	}),
	new HtmlWebpackPlugin({  
		filename: horizonteInstitucionalOutput, 
		template: horizonteInstitucionalInput,
		inject: true,
		hash: true,
		templateParameters: {
			nombre: 'Horizonte Institucional',
			titulo: 'Horizonte Institucional',
			principal: 'Principal',
			identificacion: 'Identificación',
			horizonteInst: 'Horizonte Institucional',
			gestionDir: 'Gestión Directiva',
			gestionPed: 'Gestión Pedagógica',
			gestionATH: 'Gestión Administrativa y Talento Humano'
			gestionCom: 'Gestión de la Comunidad',
			cerrarCesion: 'Cerrar Cesion',
			ayuda1: 'Preguntas basicas para hacer una misión',
			mision: 'Misión',
			ayuda2: 'Elementos de una Visión',
			vision: 'Visión',
			ayuda3: 'Ejemplos principios institucionales',
			principios: 'Principios',
			ayuda4: 'Que es?',
			filosofia: 'Filosofía',
			ayuda5: 'Concepto',
			guardar : 'Guardar ',
			culturaInstitucional: 'Cultura Institucional',
			continuar: 'Continuar',
			idead: 'Instituto de Educación a Distancia'
		}
	}),
	new HtmlWebpackPlugin({  
		filename: horizonteInstitucionalModificarOutput, 
		template: horizonteInstitucionalModificarInput,
		inject: true,
		hash: true,
		templateParameters: {
			nombre: 'Modificar Horizonte Institucional',
			
		}
	}),
	new HtmlWebpackPlugin({  
		filename: gestionPedagogicaOutput, 
		template: gestionPedagogicaInput,
		inject: true,
		hash: true,
		templateParameters: {
			titulo: 'Gestión Pedagógica',
		}
	}),
	new HtmlWebpackPlugin({  
		filename: gestionPedagogicaModificarOutput, 
		template: gestionComunidadModificarInput,
		inject: true,
		hash: true,
		templateParameters: {
			titulo: 'Modificar Gestión Pedagógica',
		}
	}),
	new HtmlWebpackPlugin({  
		filename: gestionDirectivaOutput, 
		template: gestionDirectivaInput,
		inject: true,
		hash: true,
		templateParameters: {
			titulo: 'Gestión Directiva',
		}
	}),
	new HtmlWebpackPlugin({  
		filename: gestionDirectivaModificarOutput, 
		template: gestionDirectivaModificarInput,
		inject: true,
		hash: true,
		templateParameters: {
			titulo: 'Gestión Directiva',
		}
	}),
	new HtmlWebpackPlugin({  
		filename: gestionComunidadOutput, 
		template: gestionComunidadInput,
		inject: true,
		hash: true,
		templateParameters: {
			titulo: 'Gestión de la Comunidad',
		}
	}),
	new HtmlWebpackPlugin({  
		filename: gestionComunidadModificarOutput, 
		template: gestionComunidadModificarInput,
		inject: true,
		hash: true,
		templateParameters: {
			titulo: 'Modificar Gestión de la Comunidad',
		}
	}),
	new HtmlWebpackPlugin({  
		filename: gestionAdministrativaTHOutput, 
		template: gestionAdministrativaTHInput,
		inject: true,
		hash: true,
		templateParameters: {
			titulo: 'Gestión Administrativa',
		}
	}),
	new HtmlWebpackPlugin({  
		filename: gestionAdministrativaTHModificarOutput, 
		template: gestionAdministrativaTHModificarInput,
		inject: true,
		hash: true,
		templateParameters: {
			titulo: 'Modificar Gestión Administrativa',
		}
	}),

	new HtmlWebpackPlugin({  
		filename: principalOutput, 
		template: principalInput,
		inject: true,
		hash: true,
		templateParameters: {
			titulo: ' ',
		}
	}),
	new HtmlWebpackPlugin({  
		filename: modificarOutput, 
		template: modificarInput,
		inject: true,
		hash: true,
		templateParameters: {
			titulo: ' ',
		}
	}),
	new HtmlWebpackPlugin({  
		filename: registroOutput, 
		template: registroInput,
		inject: true,
		hash: true,
		templateParameters: {
			titulo: ' ',
		}
	})

	]	
	
};



