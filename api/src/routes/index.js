const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const handlerGetDogs = require('../Handlers/handlerGetDogs');
const handlerGetDogsById = require('../Handlers/handlerGetDogsById');
const handlerGetDogByName = require('../Handlers/handlerGetDogByName');
const handlerGetTemperamentsDb = require('../Handlers/handlerGetTemperamentsDb');
const handlerPost = require('../Handlers/handlerPost');
const handlerGetDogsFromDb = require('../Handlers/handlerGetDogsFromDb');
const handlerDeleteDogsBd = require('../Handlers/handlerDeleteDogsBd');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/dogs',handlerGetDogs);
router.get('/dogs/:id',handlerGetDogsById);
router.get('/db',handlerGetDogsFromDb);
router.get('/name',handlerGetDogByName);
router.get('/temperaments',handlerGetTemperamentsDb);
router.post('/dogs',handlerPost);
router.delete('/delete/:id',handlerDeleteDogsBd);

module.exports = router;
