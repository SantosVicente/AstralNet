const router = require('express').Router();

//Users Router
const usersRouter = require('./users');

router.use('/', usersRouter);

//Coments Router
const comentsRouter = require('./coments');

router.use('/', comentsRouter);

module.exports = router;