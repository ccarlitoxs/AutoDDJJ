import postDDJJPYService from '../services/postDDJJPY.service.js';
import postDDJJARG1Service from '../services/postDDJJARG1.service.js';
import moment from 'moment';
import Archiver from 'archiver';
import path from 'path';
import fs from 'fs';
// import { downloadQR } from '../utils/functions/downloadQR.js';

export const postDDJJPY = async (req, res) => {
  console.log('BODY', req.body);
  const {
    razonsocial,
    nombreCortoTransporte,
    telEmpresa,
    telDueñoEmpresa,
    fechaPartida,
    nombreDueñoEmpresa,
    calle,
    nroCalle,
    ciudad,
  } = req.body.empresa;
  const {
    apellido,
    nombre,
    dni,
    sexo,
    edad,
    tipoVacuna,
    esquemaVacuna,
    terceraVacuna,
  } = req.body.pasajero;

  const PY = {
    Hacer: 'viajeros',
    'Datos[0][name]': 'medioTransporte',
    'Datos[0][value]': 'TERRESTRE',
    'Datos[1][name]': 'medioTransporteTerrestre',
    'Datos[1][value]': 'BUS',
    'Datos[2][name]': 'medioTransporteTerrestreOtros',
    'Datos[2][value]': '',
    'Datos[3][name]': 'nombreCompania',
    'Datos[3][value]': 'OTROS',
    'Datos[4][name]': 'nombreCompaniaOtros',
    'Datos[4][value]': razonsocial.toUpperCase(),
    'Datos[5][name]': 'numeroAsiento',
    'Datos[5][value]': nombreCortoTransporte.toUpperCase(),
    'Datos[6][name]': 'documento',
    'Datos[6][value]': Number(dni),
    'Datos[7][name]': 'CI',
    'Datos[7][value]': Number(dni),
    'Datos[8][name]': 'documentoPais',
    'Datos[8][value]': 'ARGENTINA',
    'Datos[9][name]': 'documentoPaisOtro',
    'Datos[9][value]': '',
    'Datos[10][name]': 'Nombres',
    'Datos[10][value]': nombre.toUpperCase(),
    'Datos[11][name]': 'Apellidos',
    'Datos[11][value]': apellido.toUpperCase(),
    'Datos[12][name]': 'Edad',
    'Datos[12][value]': Number(edad),
    'Datos[13][name]': 'MedidaEdad',
    'Datos[13][value]': 'AÑO(S)',
    'Datos[14][name]': 'Sexo',
    'Datos[14][value]': sexo.toUpperCase() === 'M' ? 'MASCULINO' : 'FEMENINO',
    'Datos[15][name]': 'domicilioParticular',
    'Datos[15][value]': calle.toUpperCase(),
    'Datos[16][name]': 'domicilioParticularNro',
    'Datos[16][value]': Number(nroCalle),
    'Datos[17][name]': 'domicilioParticularCiudad',
    'Datos[17][value]': ciudad.toUpperCase(),
    'Datos[18][name]': 'domicilioParticularPais',
    'Datos[18][value]': 'ARGENTINA',
    'Datos[19][name]': 'telefonoParticularPais1',
    'Datos[19][value]': Number(telEmpresa),
    'Datos[20][name]': 'telefonoParticularPais2',
    'Datos[20][value]': '',
    'Datos[21][name]': 'emailContactoResidencia',
    'Datos[21][value]': '',
    'Datos[22][name]': 'MotivoViaje',
    'Datos[22][value]': 'TRABAJO',
    'Datos[23][name]': 'fechaIngreso',
    'Datos[23][value]': moment(fechaPartida)
      .add(1, 'days')
      .format('YYYY-MM-DD'),
    'Datos[24][name]': 'Origen',
    'Datos[24][value]': 'TERMINAL',
    'Datos[25][name]': 'puertoOrigen',
    'Datos[25][value]': 'TERMINAL',
    'Datos[26][name]': 'ingresoPor',
    'Datos[26][value]': '4',
    'Datos[27][name]': 'ContactoOrigen',
    'Datos[27][value]': nombreDueñoEmpresa.toUpperCase(),
    'Datos[28][name]': 'ContactoOrigenTelefono',
    'Datos[28][value]': Number(telDueñoEmpresa),
    'Datos[29][name]': 'CIme',
    'Datos[29][value]': '',
    'Datos[30][name]': 'PAme',
    'Datos[30][value]': '',
    'Datos[31][name]': 'NOme',
    'Datos[31][value]': '',
    'Datos[32][name]': 'APme',
    'Datos[32][value]': '',
    'Datos[33][name]': 'PARme',
    'Datos[33][value]': 'HIJO',
    'Datos[34][name]': 'SIme',
    'Datos[34][value]': 'NO',
    'Datos[35][name]': 'OtroPais',
    'Datos[35][value]': '',
    'Datos[36][name]': 'Ciudad',
    'Datos[36][value]': '',
    'Datos[37][name]': 'FechaIn',
    'Datos[37][value]': '',
    'Datos[38][name]': 'FechaOut',
    'Datos[38][value]': '',
    'Datos[39][name]': 'Fiebre',
    'Datos[39][value]': 'NO',
    'Datos[40][name]': 'DolorGarganta',
    'Datos[40][value]': 'NO',
    'Datos[41][name]': 'DificultadRespirar',
    'Datos[41][value]': 'NO',
    'Datos[42][name]': 'Diarrea',
    'Datos[42][value]': 'NO',
    'Datos[43][name]': 'Vomito',
    'Datos[43][value]': 'NO',
    'Datos[44][name]': 'ErupcionesCutaneas',
    'Datos[44][value]': 'NO',
    'Datos[45][name]': 'Tos',
    'Datos[45][value]': 'NO',
    'Datos[46][name]': 'Cefalea',
    'Datos[46][value]': 'NO',
    'Datos[47][name]': 'HematomasSangrados',
    'Datos[47][value]': 'NO',
    'Datos[48][name]': 'Ictericia',
    'Datos[48][value]': 'NO',
    'Datos[49][name]': 'PerdidaOlfato',
    'Datos[49][value]': 'NO',
    'Datos[50][name]': 'PerdidaGusto',
    'Datos[50][value]': 'NO',
    'Datos[51][name]': 'OtrosSignosSintomas',
    'Datos[51][value]': '',
    'Datos[52][name]': 'ContactoPersonasEnfermas',
    'Datos[52][value]': 'NO',
    'Datos[53][name]': 'contactoEnfermedad',
    'Datos[53][value]': '',
    'Datos[54][name]': 'Departamento',
    'Datos[54][value]': '07',
    'Datos[55][name]': 'Departamento_desc',
    'Datos[55][value]': '',
    'Datos[56][name]': 'Distrito',
    'Datos[56][value]': '001',
    'Datos[57][name]': 'Distrito_desc',
    'Datos[57][value]': '',
    'Datos[58][name]': 'Barrio',
    'Datos[58][value]': '220',
    'Datos[59][name]': 'Barrio_desc',
    'Datos[59][value]': '',
    'Datos[60][name]': 'Barrio_manual',
    'Datos[60][value]': '',
    'Datos[61][name]': 'direccionCasa',
    'Datos[61][value]': '',
    'Datos[62][name]': 'Telefono1',
    'Datos[62][value]': '',
    'Datos[63][name]': 'Telefono2',
    'Datos[63][value]': '',
    'Datos[64][name]': 'contactoPais',
    'Datos[64][value]': '',
    'Datos[65][name]': 'contactoPaisTelefono1',
    'Datos[65][value]': '',
    'Datos[66][name]': 'contactoPaisTelefono2',
    'Datos[66][value]': '',
    'Datos[67][name]': 'VacCovid19',
    'Datos[67][value]': 'SI',
    'Datos[68][name]': 'VacCovid19Tipo',
    'Datos[68][value]': tipoVacuna.toUpperCase(),
    'Datos[69][name]': 'VacCovid19TipoOtro',
    'Datos[69][value]': '',
    'Datos[70][name]': 'VacCovid19Pais',
    'Datos[70][value]': 'ARGENTINA',
    'Datos[71][name]': 'VacCovid19PaisOtro',
    'Datos[71][value]': '',
    'Datos[72][name]': 'VacCovid19Esquema',
    'Datos[72][value]': esquemaVacuna.toUpperCase(),
    'Datos[73][name]': 'VacCovid19Tipo3',
    'Datos[73][value]': terceraVacuna.toUpperCase(),
    'Datos[74][name]': 'VacCovid19TipoOtro3',
    'Datos[74][value]': '',
    'Datos[75][name]': 'VacFiebreAmarilla',
    'Datos[75][value]': 'NO',
    'Datos[76][name]': 'VacSarampion',
    'Datos[76][value]': 'NO',
    'Datos[77][name]': 'estCOVID19',
    'Datos[77][value]': 'NO',
    'Datos[78][name]': 'FechaTomaMuestra',
    'Datos[78][value]': '',
    'Datos[79][name]': 'estCOVID19A',
    'Datos[79][value]': 'NO',
    'Datos[80][name]': 'FechaTomaMuestraA',
    'Datos[80][value]': '',
    'Datos[81][name]': 'aceptaDeclaracion',
    'Datos[81][value]': 'SI',
    'Datos[82][name]': 'TipoFicha',
    'Datos[82][value]': 'VIAJEROS',
    'Viajes[0][Pais]': 'ARGENTINA',
    'Viajes[0][OtroPais]': '',
    'Viajes[0][Ciudad]': 'RESISTENCIA',
    'Viajes[0][FechaIn]': moment(fechaPartida).format('DD/MM/YYYY'),
    'Viajes[0][FechaOut]': moment(fechaPartida).format('DD/MM/YYYY'),
  };

  try {
    const resPY = await postDDJJPYService(PY);

    console.log('resPY', resPY); // .reason.response.status o data  
  
    return res.json({msg: 'Solicitud correcta a Paraguay', qrLink: `${process.env.AUTORITY_PY_SERVER}/views/paginas/viajeros_img/1128751/qrcode/${resPY.codigo}.png`});
  } catch (error) {
    res.status(400).json({status: 400, msg: 'Fallo solicitud Paraguay'})
    console.log(error)
  }

};

export const postDDJJArg1 = async (req, res) => {
  console.log('BODY', req.body);
  const {
    emailEmpresa,
  } = req.body.empresa;
  const {
    fechaEmision,
    dni,
    sexo,
  } = req.body.pasajero;

  const ARG1 = {
    idioma: 'spanish',
    pais: 'ARG##ARGENTINA',
    doc: Number(dni),
    gen: sexo.toUpperCase(),
    f_e: moment(fechaEmision).format('DD/MM/YYYY'),
    mail: emailEmpresa,
  };

  try {
    const resArg1 = await postDDJJARG1Service(ARG1);

    console.log('resArg1', resArg1); // .value.data
  
    return res.json({msg: 'Solicitud correcta a Argentina Paso 1'});
  } catch (error) {
    res.status(400).json({status: 400, msg: 'Fallo solicitud Argentina Paso 1'})
    console.log(error)
  }

};

export const downloadQRFolder = async (req, res) => {
  // Tell the browser that this is a zip file.
  res.writeHead(200, {
    'Content-Type': 'application/zip',
    'Content-disposition': `attachment; filename=qrpy-${moment().format()}.zip`,
  });

  var zip = Archiver('zip');

  // Send the file to the page output.
  zip.pipe(res); // <--- GENERATES TypeError: Cannot read property 'length' of null

  // Create zip with some files. Two dynamic, one static. Put #2 in a sub folder.
  zip
    .glob('qrpy-*.png', { cwd: `${path.resolve()}\\files\\uploads\\QRPY` })
    .finalize();
};

export const deleteQRs = async (req, res) => {

const directory = `${path.resolve()}\\files\\uploads\\QRPY`;

fs.readdir(directory, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlink(path.join(directory, file), (err) => {
      if (err) throw err;
    });
  }
});

return res.json({msg: 'deleted'});
}
