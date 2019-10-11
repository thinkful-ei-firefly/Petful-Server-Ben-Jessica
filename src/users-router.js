const express = require('express');
const usersRouter = express.Router();
// const Queue = require('./queue');

usersRouter.route('/').get();

usersRouter.route('/:user_id').get();

module.exports = usersRouter;
