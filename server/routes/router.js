const router = require('express').Router();

//Users Router
const usersRouter = require('./users');

router.use('/users', usersRouter);

//Coments Router
const comentsRouter = require('./coments');

router.use('/coments', comentsRouter);

module.exports = router;