const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');

require('./db.js');

const server = express();

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://dogs-pi-client.vercel.app'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use(express.json())
server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;


/*
las cors : Una API es un procedimiento establecido para que dos programas se comuniquen. Esto significa que otros clientes y servidores consumen los recursos API.
El cliente y el servidor tienen un origen diferente entre sí, es decir, acceden a recursos desde un servidor diferente. En este caso, fallará el intento de realizar una solicitud a un recurso en el otro servidor.
Este es un problema de seguridad para el navegador. CORS entra en juego para desactivar este mecanismo y permitir el acceso a estos recursos. CORS agregará un encabezado de respuesta access-control-allow-originsy especificará qué orígenes están permitidos. CORS garantiza que enviemos los encabezados correctos

=> npm i cors express nodemon

const cors = require('cors');
app.use(cors({
    origin: 'https://www.section.io'
}));

const cors = require('cors');
app.use(cors({
    origin: ['https://www.section.io', 'https://www.google.com/']
}));

El bloque de código a continuación garantizará que cualquier página pueda acceder a los recursos de...
app.use(cors({
    origin: '*'
}));
*/