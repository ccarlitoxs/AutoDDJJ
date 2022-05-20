import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from 'path';
import helmet from 'helmet';

import router from './routes/routes.js';

dotenv.config({path: 'entorno.env'});

//crear el servidor
const app = express();
app.use(morgan('dev'));

app.use(express.static(path.resolve() + '\\client\\build'));

const whitelist = [
  // process.env.BACKEND_URL_LOCAL,
  // `${process.env.BACKEND_URL_LOCAL}/`,
  process.env.FRONTEND_URL,
  `${process.env.FRONTEND_URL}/`,
];

// console.log(whitelist);

const corsOptions ={
  origin:(origin, callback) => {
    console.log('ORIGEN',origin);
    //Revisar si la peticion viene de un servidor que esta en whitelist
    const existe = whitelist.some( dominio => dominio === origin );
    if (existe || !origin) {
      callback (null,true);
    } else {
      callback (new Error ('no permitido por CORS'));
    }
  }
};

//Habilitar cors
// app.use(cors(corsOptions));
app.use(cors());

//Includes Contest-Security-Policy, X-Content-Type-optiones, X-XSS-Protection, Strict-Trnasport-Security
app.use(helmet({ crossOriginResourcePolicy: { policy: 'same-site' } }));

//Habilitar express.json
app.use(express.json({ extended:true }));

// Rutas
app.use('/api',router);

//Definir la pagina principal
app.get('*', function (req, res) {
  res.sendFile(path.resolve() + '/client/build/index.html');
});

//Puerto de la app
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 4050;

//arrancar el servidor
app.listen(port, host ,() => {
  console.log('Server online on port:',port);
}
);
