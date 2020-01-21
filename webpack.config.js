const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path")


const indextInput = './htlm/index.html';
const indexOutput = 'index.html';

const identificacionInput = './htlm/identificacion.html';
const identificacionOutput = 'identificacion.html'

const identificacionModificarInput = './htlm/identificacionModificar.html';
const identificacionModificarOutput = 'identificacionModificar.html'

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



const webpackInitConfig  = {
	output: {
			path: path.resolve(--dirname, "dist"),
			filename: "bundle.js",
			publicPath: "/dist",
	}
	
	module ={
		plugins :[
			new HtmlWebpackPlugin({  
				filename: indexOutput, 
				template: indextInput,
				inject: true,
				hash: true,
				templateParameters: {
				  titulo: 'Inicio',
				}
		  }),
		  new HtmlWebpackPlugin({  
				filename: identificacionOutput, 
				template: identificacionInput,
				inject: true,
				hash: true,
				templateParameters: {
				  titulo: 'Identificación',
				}
		  }),
		  new HtmlWebpackPlugin({  
				filename: identificacionModificarOutput, 
				template: identificacionModificarInput,
				inject: true,
				hash: true,
				templateParameters: {
				  titulo: 'Modificar Identificación',
				}
		  }),
		  new HtmlWebpackPlugin({  
				filename: horizonteInstitucionalOutput, 
				template: horizonteInstitucionalInput,
				inject: true,
				hash: true,
				templateParameters: {
				  titulo: 'Horizonte Institucional',
				}
		  }),
		  new HtmlWebpackPlugin({  
				filename: horizonteInstitucionalModificarOutput, 
				template: horizonteInstitucionalModificarInput,
				inject: true,
				hash: true,
				templateParameters: {
				  titulo: 'Modificar Horizonte Institucional',
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
	
	}
};



module.exports = webpackInitConfig;