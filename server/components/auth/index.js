'use strict';

const auth = require('./auth.controller');
const authRouter = require('express').Router();

authRouter.post('/login', auth.login);
authRouter.post('/logout', auth.logout);
authRouter.get('/currentuser', auth.requiresAuth, auth.getCurrentUser);

module.exports = authRouter;
