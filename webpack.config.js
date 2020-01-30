const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');


const indextInput = './html/index.html';
const indexOutput = 'index.html';

const identificacionInput = './html/identificacion.html';
const identificacionOutput = 'identificacion.html';

const identificacionModificarInput = './html/identificacionModificar.html';
const identificacionModificarOutput = 'identificacionModificar.html';

const horizonteInstitucionalInput = './html/horizonteInstitucional.html';
const horizonteInstitucionalOutput = 'horizonteInstitucional.html';

const horizonteInstitucionalModificarInput = './html/horizonteInstitucionalModificar.html';
const horizonteInstitucionalModificarOutput = 'horizonteInstitucionalModificar.html';

const gestionPedagogicaInput = './html/gestionPedagogica.html';
const gestionPedagogicaOutput = 'gestionPedagogica.html';

const gestionPedagogicaModificarInput = './html/gestionPedagogicaModificar.html';
const gestionPedagogicaModificarOutput = 'gestionPedagogicaModificar.html';

const gestionDirectivaInput = './html/gestionDirectiva.html';
const gestionDirectivaOutput = 'gestionDirectiva.html';

const gestionDirectivaModificarInput = './html/gestionDirectivaModificar.html';
const gestionDirectivaModificarOutput = 'gestionDirectivaModificar.html';

const gestionComunidadInput = './html/gestionComunidad.html';
const gestionComunidadOutput = 'gestionComunidad.html';

const gestionComunidadModificarInput = './html/gestionComunidadModificar.html';
const gestionComunidadModificarOutput = 'gestionComunidadModificar.html';

const gestionAdministrativaTHInput = './html/gestionAdministrativaTH.html';
const gestionAdministrativaTHOutput = 'gestionAdministrativaTH.html';

const gestionAdministrativaTHModificarInput = './html/gestionAdministrativaTHModificar.html';
const gestionAdministrativaTHModificarOutput = 'gestionAdministrativaTHModificar.html'

const principalInput = './html/principal.html';
const principalOutput = 'principal.html';

const modificarInput = './html/modificar.html';
const modificarOutput = 'modificar.html';

const registroInput = './html/registro.html';
const registroOutput = 'registro.html';

const recuperarInput = './html/recuperar.html';
const recuperarOutput = 'recuperar.html';



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

	plugins: [
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
				registro: "Registro",
				contraseña: 'Contraseña',
				ingresar: 'Ingresar',
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
				titulo: 'Identificación',
				principal: 'Principal',
				identificacion: 'Identificación',
				horizonteInst: 'Horizonte Institucional',
				gestionDir: 'Gestión Directiva',
				gestionPed: 'Gestión Pedagógica',
				gestionATH: 'Gestión Administrativa y Talento Humano',
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
				guardar: 'Guardar',
				continuar: 'Continuar',
				idead: 'Instituto de Educación a Distancia',
				ingresar: 'Ingresar',
				registro: 'Registro'
			}
		}),
		new HtmlWebpackPlugin({
			filename: identificacionModificarOutput,
			template: identificacionModificarInput,
			inject: true,
			hash: true,
			templateParameters: {
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
				guardar: 'Guardar Modificaciones',
				idead: 'Instituto de Educación a Distancia'
			}
		}),
		new HtmlWebpackPlugin({
			filename: horizonteInstitucionalOutput,
			template: horizonteInstitucionalInput,
			inject: true,
			hash: true,
			templateParameters: {
				titulo: 'Horizonte Institucional',
				principal: 'Principal',
				identificacion: 'Identificación',
				horizonteInst: 'Horizonte Institucional',
				gestionDir: 'Gestión Directiva',
				gestionPed: 'Gestión Pedagógica',
				gestionATH: 'Gestión Administrativa y Talento Humano',
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
				guardar: 'Guardar ',
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
				titulo: 'Modificar Horizonte Institucional',
				consultar: 'Consultar Horizonte Institucional',
				mision: 'Misión',
				vision: 'Visión',
				principios: 'Principios',
				filosofia: 'Filosofía',
				culturaInstitucional: 'Cultura Institucional',
				guardar: 'Guardar Modificaciones',
				idead: 'Instituto de Educación a Distancia'

			}
		}),
		new HtmlWebpackPlugin({
			filename: gestionPedagogicaOutput,
			template: gestionPedagogicaInput,
			inject: true,
			hash: true,
			templateParameters: {
				titulo: 'Gestión Pedagógica',
				principal: 'Principal',
				identificacion: 'Identificación',
				horizonteInst: 'Horizonte Institucional',
				gestionDir: 'Gestión Directiva',
				gestionPed: 'Gestión Pedagógica',
				gestionATH: 'Gestión Administrativa y Talento Humano',
				gestionCom: 'Gestión de la Comunidad',
				cerrarCesion: 'Cerrar Cesion',
				planEstudio: 'Plan de Estudio',
				ayuda1: 'Modelos pedagógicos fundamentales',
				modeloPedagogico: 'Modelo Pedagógico',
				ayuda2: 'DECRETO NUMERO 1850 DE 2002 ',
				jornadaEscolar: 'Jornada Escolar',
				ayuda3: 'Decreto 1290 ',
				siee: 'Sistema Institucional de Evaluación (SIEE)',
				criteriosEvaluacion: '1. Los criterios de evaluación y promoción.',
				escalaValoracion: '2. La escala de valoración institucional y su respectiva equivalencia con la escala nacional.',
				estrategiasValoracion: '3. Las estrategias de valoración integral de los desempeños de los estudiantes.',
				accionesSeguimiento: '4. Las acciones de seguimiento para el mejoramiento de los desempeños de los estudiantes durante el año escolar.',
				procesosAutoevaluacion: '5. Los procesos de autoevaluación de los planes de apoyo y estrategias de inclusión. ',
				estategiasApoyo: '6. Las estrategias de apoyo necesarias para resolver situaciones pedagógicas pendientes de los estudiantes.',
				accionesCumplimientoEvaluacion: '7. Las acciones para garantizar que los directivos docentes y docentes del establecimiento educativo cumplan con los procesos evaluativos estipulados en el sistema institucional de evaluación.',
				periodicidadInformes: '8. La periodicidad de entrega de informes a los padres de familia.',
				estructuraInformes: '9. La estructura de los informes de los estudiantes, para que sean claros, comprensibles y den información integral del avance en la formación.',
				resolucionReclamos: '10. Las instancias, procedimientos y mecanismos de atención y resolución de reclamaciones de padres de familia y estudiantes sobre la evaluación y promoción.',
				participacionComunidadMecanismos: '11. Los mecanismos de participación de la comunidad educativa en la construcción del sistema institucional de evaluación de los estudiantes.',
				ayuda4: 'Proyectos Pedagógicos Transversales',
				proyectosTransversales: 'Proyectos Transversales',
				tiemposAprendizaje: 'Uso de los Tiempos de Aprendizaje',
				planeacionClase: 'Planeación de Clase ',
				ayuda5: 'Instrumentos de evaluación en el proceso enseñanza ',
				seguimientoResultados: 'Seguimiento a los Resultados',
				seguimientoAsistencia: 'Seguimiento a la Asistencia ',
				ayuda6: 'Que es?',
				buscar: 'Buscar',
				seguimientoDesercion: 'Seguimiento a la Deserción',
				guardar: 'Guardar',
				continuar: 'Continuar',
				idead: 'Instituto de Educación a Distancia'

			}
		}),
		new HtmlWebpackPlugin({
			filename: gestionPedagogicaModificarOutput,
			template: gestionPedagogicaModificarInput,
			inject: true,
			hash: true,
			templateParameters: {
				titulo: 'Modificar Gestión Pedagógica',
				consultar: 'Consultar Gestión Pedagógica ',
				planEstudio: 'Plan de Estudio',
				modeloPedagogico: 'Modelo Pedagógico',
				jornadaEscolar: 'Jornada Escolar',
				siee: 'Sistema Institucional de Evaluación (SIEE)',
				criteriosEvaluacion: '1. Los criterios de evaluación y promoción.',
				escalaValoracion: '2. La escala de valoración institucional y su respectiva equivalencia con la escala nacional.',
				estrategiasValoracion: '3. Las estrategias de valoración integral de los desempeños de los estudiantes.',
				accionesSeguimiento: '4. Las acciones de seguimiento para el mejoramiento de los desempeños de los estudiantes durante el año escolar.',
				procesosAutoevaluacion: '5. Los procesos de autoevaluación de los planes de apoyo y estrategias de inclusión. ',
				estategiasApoyo: '6. Las estrategias de apoyo necesarias para resolver situaciones pedagógicas pendientes de los estudiantes.',
				accionesCumplimientoEvaluacion: '7. Las acciones para garantizar que los directivos docentes y docentes del establecimiento educativo cumplan con los procesos evaluativos estipulados en el sistema institucional de evaluación.',
				periodicidadInformes: '8. La periodicidad de entrega de informes a los padres de familia.',
				estructuraInformes: '9. La estructura de los informes de los estudiantes, para que sean claros, comprensibles y den información integral del avance en la formación.',
				resolucionReclamos: '10. Las instancias, procedimientos y mecanismos de atención y resolución de reclamaciones de padres de familia y estudiantes sobre la evaluación y promoción.',
				participacionComunidadMecanismos: '11. Los mecanismos de participación de la comunidad educativa en la construcción del sistema institucional de evaluación de los estudiantes.',
				proyectosTransversales: 'Proyectos Transversales',
				tiemposAprendizaje: 'Uso de los Tiempos de Aprendizaje',
				planeacionClase: 'Planeación de Clase ',
				seguimientoResultados: 'Seguimiento a los Resultados',
				seguimientoAsistencia: 'Seguimiento a la Asistencia ',
				buscar: 'Buscar',
				seguimientoDesercion: 'Seguimiento a la Deserción',
				guardar: 'Guardar Modificaciones',
				idead: 'Instituto de Educación a Distancia'
			}
		}),
		new HtmlWebpackPlugin({
			filename: gestionDirectivaOutput,
			template: gestionDirectivaInput,
			inject: true,
			hash: true,
			templateParameters: {
				titulo: 'Gestión Directiva',
				principal: 'Principal',
				identificacion: 'Identificación',
				horizonteInst: 'Horizonte Institucional',
				gestionDir: 'Gestión Directiva',
				gestionPed: 'Gestión Pedagógica',
				gestionATH: 'Gestión Administrativa y Talento Humano',
				gestionCom: 'Gestión de la Comunidad',
				cerrarCesion: 'Cerrar Cesion',
				ayuda1: ' Planeamiento de metas',
				metasInstitucionales: 'Metas Institucionales',
				ayuda2: 'Inclusion Educativa',
				ayuda3: 'Ley Estatutaria 1618 de 2013',
				politicasInclusion: 'Políticas de Inclusión - Propuesta de la IE',
				politicasArticulacion: 'Políticas de Articulación',
				ayuda4: 'Etapas del diseño curricular',
				estrategiaPedagogica: 'Estrategia Pedagógica',
				ayuda5: 'Normatividad',
				gobiernoEscolar: 'Gobierno Escolar',
				consejoDirectivo: 'Consejo Directivo',
				consejoAcademico: 'Consejo Académico',
				consejoEvaluacion: 'Consejo de Evaluación y Promoción',
				comiteConvivencia: 'Comité de Convivencia Escolar',
				consejoEstudiantil: 'Consejo Estudiantil',
				consejoPadres: 'Consejo de Padres de Familia',
				ayuda6: 'Comunicacion externa',
				mecanismosComunicacion: 'Mecanismos de Comunicación',
				ayuda7: 'Motivación y estímulo',
				reconocimientoLogros: 'Políticas para el Reconocimiento de Logros',
				induccion: 'Inducción de Nuevos Estudiantes y Docentes',
				ayuda8: 'Recomendaciones para mejorar el clima laboral ',
				planEstimulos: 'Plan de Estímulos Educativos',
				ayuda9: 'Ley 1620 de 2013 ',
				ayuda10: 'Decreto 1965 de 2013 ',
				ayuda11: 'Ley 115 de 1994 - art 73 y 87 ',
				pactoConv: 'Pacto de Convivencia',
				reglasHigienePersonal: '1.- Las reglas de higiene personal y de salud pública que preserven el bienestar de la comunidad educativa, la conservación individual de la salud y la prevención frente al consumo de sustancias psicotrópicas.',
				criteriosRespeto: '2.- Criterios de respeto, valoración y compromiso frente a la utilización y conservación de los bienes personales y de uso colectivo, tales como equipos, instalaciones e implementos.',
				pautasComportamiento: '3.- Pautas de comportamiento en relación con el cuidado del medio ambiente escolar.',
				normasConducta: '4.- Normas de conducta de alumnos y profesores que garanticen el mutuo respeto. Deben incluir la definición de claros procedimientos para formular las quejas o reclamos al respecto.',
				procedimientosConflictos: '5.- Procedimientos para resolver con oportunidad y justicia los conflictos individuales o colectivos que se presenten entre miembros de la comunidad. Deben incluir instancias de diálogo y de conciliación.',
				pautasPresentacionPersonal: '6.- Pautas de presentación personal que preserven a los alumnos de la discriminación por razones de apariencia.',
				definicionSanciones: '7.- Definición de sanciones disciplinarias aplicables a los alumnos, incluyendo el derecho a la defensa.',
				eleccionRepresentantes: `8.- Reglas para la elección de representantes al Consejo Directivo y para la escogencia de voceros en los demás consejos previstos en el presente Decreto. Debe incluir el proceso de elección del personero de
			los estudiantes.`,
				calidadAlimentacion: '9.- Calidades y condiciones de los servicios de alimentación, transporte, recreación dirigida y demás conexos con el servicio de educación que ofrezca la institución a los alumnos.',
				funcionamientoComunicacion: '10.- Funcionamiento y operación de los medios de comunicación interna del establecimiento, tales como periódicos, revistas o emisiones radiales que sirvan de instrumentos efectivos al libre pensamiento y a la libre expresión.',
				provisionMaterialDidactico: '11.- Encargos hechos al establecimiento para aprovisionar a los alumnos de material didáctico de uso general, libros, uniformes, seguros de vida y de salud.',
				usoBibliobanco: '12.- Reglas para uso del bibliobanco y la biblioteca escolar.',
				actividadesExtracurriculares: 'Actividades Extracurriculares',
				ayuda12: 'Gestión Estratégica',
				autoevaluacionInstitucional: 'Autoevaluacion Institucional',
				buscar: 'Buscar',
				guardar: 'Guardar',
				continuar: 'Continuar',
				idead: 'Instituto de Educación a Distancia'
			}
		}),
		new HtmlWebpackPlugin({
			filename: gestionDirectivaModificarOutput,
			template: gestionDirectivaModificarInput,
			inject: true,
			hash: true,
			templateParameters: {
				titulo: 'Modificar Gestión Directiva',
				consultar: 'Consultar Gestion Directiva',
				metasInstitucionales: 'Metas Institucionales',
				politicasInclusion: 'Políticas de Inclusión - Propuesta de la IE',
				politicasArticulacion: 'Políticas de Articulación',
				estrategiaPedagogica: 'Estrategia Pedagógica',
				gobiernoEscolar: 'Gobierno Escolar',
				consejoDirectivo: 'Consejo Directivo',
				consejoAcademico: 'Consejo Académico',
				consejoEvaluacion: 'Consejo de Evaluación y Promoción',
				comiteConvivencia: 'Comité de Convivencia Escolar',
				consejoEstudiantil: 'Consejo Estudiantil',
				consejoPadres: 'Consejo de Padres de Familia',
				mecanismosComunicacion: 'Mecanismos de Comunicación',
				reconocimientoLogros: 'Políticas para el Reconocimiento de Logros',
				induccion: 'Inducción de Nuevos Estudiantes y Docentes',
				planEstimulos: 'Plan de Estímulos Educativos',
				pactoConv: 'Pacto de Convivencia',
				reglasHigienePersonal: '1.- Las reglas de higiene personal y de salud pública que preserven el bienestar de la comunidad educativa, la conservación individual de la salud y la prevención frente al consumo de sustancias psicotrópicas.',
				criteriosRespeto: '2.- Criterios de respeto, valoración y compromiso frente a la utilización y conservación de los bienes personales y de uso colectivo, tales como equipos, instalaciones e implementos.',
				pautasComportamiento: '3.- Pautas de comportamiento en relación con el cuidado del medio ambiente escolar.',
				normasConducta: '4.- Normas de conducta de alumnos y profesores que garanticen el mutuo respeto. Deben incluir la definición de claros procedimientos para formular las quejas o reclamos al respecto.',
				procedimientosConflictos: '5.- Procedimientos para resolver con oportunidad y justicia los conflictos individuales o colectivos que se presenten entre miembros de la comunidad. Deben incluir instancias de diálogo y de conciliación.',
				pautasPresentacionPersonal: '6.- Pautas de presentación personal que preserven a los alumnos de la discriminación por razones de apariencia.',
				definicionSanciones: '7.- Definición de sanciones disciplinarias aplicables a los alumnos, incluyendo el derecho a la defensa.',
				eleccionRepresentantes: `8.- Reglas para la elección de representantes al Consejo Directivo y para la escogencia de voceros en los demás consejos previstos en el presente Decreto. Debe incluir el proceso de elección del personero de
			los estudiantes.`,
				calidadAlimentacion: '9.- Calidades y condiciones de los servicios de alimentación, transporte, recreación dirigida y demás conexos con el servicio de educación que ofrezca la institución a los alumnos.',
				funcionamientoComunicacion: '10.- Funcionamiento y operación de los medios de comunicación interna del establecimiento, tales como periódicos, revistas o emisiones radiales que sirvan de instrumentos efectivos al libre pensamiento y a la libre expresión.',
				provisionMaterialDidactico: '11.- Encargos hechos al establecimiento para aprovisionar a los alumnos de material didáctico de uso general, libros, uniformes, seguros de vida y de salud.',
				usoBibliobanco: '12.- Reglas para uso del bibliobanco y la biblioteca escolar.',
				actividadesExtracurriculares: 'Actividades Extracurriculares',
				autoevaluacionInstitucional: 'Autoevaluacion Institucional',
				buscar: 'Buscar',
				guardar: 'Guardar Modificaciones',
				idead: 'Instituto de Educación a Distancia'
			}
		}),
		new HtmlWebpackPlugin({
			filename: gestionComunidadOutput,
			template: gestionComunidadInput,
			inject: true,
			hash: true,
			templateParameters: {
				titulo: 'Gestión de la Comunidad',
				principal: 'Principal',
				identificacion: 'Identificación',
				horizonteInst: 'Horizonte Institucional',
				gestionDir: 'Gestión Directiva',
				gestionPed: 'Gestión Pedagógica',
				gestionATH: 'Gestión Administrativa y Talento Humano',
				gestionCom: 'Gestión de la Comunidad',
				cerrarCesion: 'Cerrar Cesion',
				egresados: 'Asociación y Seguimiento de Egresados',
				atencionVulnerabilidad: 'Atención educativa a grupos poblacionales o en situación de vulnerabilidad que experimentan barreras al aprendizaje y la participación',
				atencionEtnias: 'Atención a la diversidad educativa a estudiantes pertenecientes a grupos étnicos y estudiantes con necesidades especiales',
				escuelaPadres: 'Escuela de Padres',
				ayuda1: 'Resolución 4210 de 1996',
				ayuda2: 'Resolución 002646 de 2008',
				servicioSocial: 'Servicio Social',
				participacionComunidad: 'Participación de la comunidad, estudiantes y padres de familia',
				prevencionRiesgosSociales: 'Prevención de Riesgos Sociales',
				finalizar: 'Finalizar',
				consultarPEI: 'Consultar P.E.I',
				idead: 'Instituto de Educación a Distancia'

			}
		}),
		new HtmlWebpackPlugin({
			filename: gestionComunidadModificarOutput,
			template: gestionComunidadModificarInput,
			inject: true,
			hash: true,
			templateParameters: {
				titulo: 'Modificar Gestión de la Comunidad',
				consultar: 'Consultar Gestion Comunidad',
				egresados: 'Asociación y Seguimiento de Egresados',
				atencionVulnerabilidad: 'Atención educativa a grupos poblacionales o en situación de vulnerabilidad que experimentan barreras al aprendizaje y la participación',
				atencionEtnias: 'Atención a la diversidad educativa a estudiantes pertenecientes a grupos étnicos y estudiantes con necesidades especiales',
				escuelaPadres: 'Escuela de Padres',
				servicioSocial: 'Servicio Social',
				participacionComunidad: 'Participación de la comunidad, estudiantes y padres de familia',
				prevencionRiesgosSociales: 'Prevención de Riesgos Sociales',
				guardar: 'Guardar Modificaciones',
				consultarPEI: 'Consultar P.E.I',
				idead: 'Instituto de Educación a Distancia'
			}
		}),
		new HtmlWebpackPlugin({
			filename: gestionAdministrativaTHOutput,
			template: gestionAdministrativaTHInput,
			inject: true,
			hash: true,
			templateParameters: {
				titulo: 'Gestión Administrativa y Talento Humano',
				principal: 'Principal',
				identificacion: 'Identificación',
				horizonteInst: 'Horizonte Institucional',
				gestionDir: 'Gestión Directiva',
				gestionPed: 'Gestión Pedagógica',
				gestionATH: 'Gestión Administrativa y Talento Humano',
				gestionCom: 'Gestión de la Comunidad',
				cerrarCesion: 'Cerrar Cesion',
				procesoMatricula: 'Proceso de Matricula',
				ayuda1: 'Ley 594 de 2000',
				archivoAcademico: 'Archivo Académico ',
				registroEvaluacion: 'Registro de Evaluación',
				buscar: 'Buscar',
				ayuda2: 'Decreto 4791 de 2008',
				ayuda3: 'Ley 610 de 2000',
				ayuda4: 'Normas Tecnicas Colombianas',
				mantenimientoPlantaFisica: 'Proyecto de Mantenimiento de Planta Física',
				seguimientoEspacios: 'Seguimiento al Uso de los Espacios',
				suministroDotacion: 'Suministro y Dotación',
				recursosAprendizaje: 'Recursos para el Aprendizaje',
				ayuda5: 'Ley 1523 de 2012 ',
				seguridadProteccion: 'Seguridad y Protección',
				bienestarSocial: 'Bienestar Social',
				talentoHumano: 'Talento Humano',
				induccionDocentes: 'Inducción',
				asignacionAcademica: 'Asignación Académica',
				evaluacionDesempeño: 'Evaluación de Desempeño',
				estimulos: 'Estímulos',
				ayuda6: 'Decreto 1278 de Junio 19 de 2002',
				apoyoInvestigacion: 'Apoyo a la Investigación',
				bienestarTH: 'Bienestar del Talento Humano',
				ayuda7: 'Resolución 355 de 2007',
				ayuda8: 'Decreto 1170 de 2015 ',
				contabilidad: 'Contabilidad',
				guardar: 'Guardar',
				continuar: 'Continuar',
				idead: 'Instituto de Educación a Distancia'

			}
		}),
		new HtmlWebpackPlugin({
			filename: gestionAdministrativaTHModificarOutput,
			template: gestionAdministrativaTHModificarInput,
			inject: true,
			hash: true,
			templateParameters: {
				titulo: 'Modificar Gestión Administrativa y Talento Humano',
				consultar: 'Consultar Gestion Administrativa y TH',
				procesoMatricula: 'Proceso de Matricula',
				archivoAcademico: 'Archivo Académico ',
				registroEvaluacion: 'Registro de Evaluación',
				buscar: 'Buscar',
				mantenimientoPlantaFisica: 'Proyecto de Mantenimiento de Planta Física',
				seguimientoEspacios: 'Seguimiento al Uso de los Espacios',
				suministroDotacion: 'Suministro y Dotación',
				recursosAprendizaje: 'Recursos para el Aprendizaje',
				seguridadProteccion: 'Seguridad y Protección',
				bienestarSocial: 'Bienestar Social',
				talentoHumano: 'Talento Humano',
				induccionDocentes: 'Inducción',
				asignacionAcademica: 'Asignación Académica',
				evaluacionDesempeño: 'Evaluación de Desempeño',
				estimulos: 'Estímulos',
				apoyoInvestigacion: 'Apoyo a la Investigación',
				bienestarTH: 'Bienestar del Talento Humano',
				contabilidad: 'Contabilidad',
				guardar: 'Guardar Modificaciones',
				idead: 'Instituto de Educación a Distancia'
			}
		}),

		new HtmlWebpackPlugin({
			filename: principalOutput,
			template: principalInput,
			inject: true,
			hash: true,
			templateParameters: {
				titulo: 'Plataforma de Administracion de Proyectos Educativos',
				principal: 'Principal',
				identificacion: 'Identificación',
				horizonteInst: 'Horizonte Institucional',
				gestionDir: 'Gestión Directiva',
				gestionPed: 'Gestión Pedagógica',
				gestionATH: 'Gestión Administrativa y Talento Humano',
				gestionCom: 'Gestión de la Comunidad',
				cerrarCesion: 'Cerrar Cesion',
				crear: 'Crear nuevo',
				consultar: 'Consultar',
				modalTit: 'Comencemos',
				modalParraf: 'En cada item podras digitar o pegar la información si esta ya existe. Las imágenes solicitadas dentro de los formularios se deberan adjuntar en formato .JPG',
				idead: 'Instituto de Educación a Distancia'
			}
		}),
		new HtmlWebpackPlugin({
			filename: modificarOutput,
			template: modificarInput,
			inject: true,
			hash: true,
			templateParameters: {
				titulo: 'Administrar Proyecto Educativo Institucional',
				pei: 'P.E.I:',
				gestiones: 'Gestiones',
				modificar: 'Modificar',
				identificacion: 'Identificación',
				horizonteInst: 'Horizonte Institucional',
				gestionDir: 'Gestión Directiva',
				gestionPed: 'Gestión Pedagógica',
				gestionATH: 'Gestión Administrativa y Talento Humano',
				gestionCom: 'Gestión de la Comunidad',
				principal: 'Ir a Principal',
				ver: 'Ver P.E.I',
				idead: 'Instituto de Educación a Distancia'

			}
		}),
		new HtmlWebpackPlugin({
			filename: registroOutput,
			template: registroInput,
			inject: true,
			hash: true,
			templateParameters: {
				titulo: 'Formulario de registro ',
				tipoID: 'Tipo de identificacion',
				cc: 'Cedula de ciudadania',
				ce: 'Cedula de Extranjeria',
				nit: 'NIT',
				departamento: 'Departamento',
				seleccione: 'Seleccione',
				ciudad: 'Ciudad',
				registrar: 'Registrar',
				cancelar: 'Cancelar',
				iniciar: 'Iniciar Sesión',
				idead: 'Instituto de Educación a Distancia'

			}
		}),
		new HtmlWebpackPlugin({
			filename: recuperarOutput,
			template: recuperarInput,
			inject: true,
			hash: true,
			templateParameters: {
				titulo: 'Formulario de registro ',
				idead: 'Instituto de Educación a Distancia'
			}
		})
	]
};



