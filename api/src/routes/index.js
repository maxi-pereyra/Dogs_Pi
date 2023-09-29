const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const handlerGetDogs = require('../Handlers/handlerGetDogs');
const handlerGetDogsById = require('../Handlers/handlerGetDogsById');
const handlerGetDogByName = require('../Handlers/handlerGetDogByName');
const handlerGetTemperamentsDb = require('../Handlers/handlerGetTemperamentsDb');
const handlerPost = require('../Handlers/handlerPost');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/dogs',handlerGetDogs);
router.get('/dogs/:id',handlerGetDogsById);
router.get('/name',handlerGetDogByName);
router.get('/temperaments',handlerGetTemperamentsDb);
router.post('/dogs',handlerPost)

module.exports = router;
