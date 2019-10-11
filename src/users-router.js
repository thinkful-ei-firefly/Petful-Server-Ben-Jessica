const express = require('express');
const usersRouter = express.Router();
const { catUserQueue, dogUserQueue } = require('./database');

usersRouter.route('/cats').get((req, res) => {
  const first = catUserQueue.peek();
  const nextThree = catUserQueue.nextThree();
  return res.status(200).json({ first, nextThree });
});

usersRouter.route('/dogs').get((req, res) => {
  const first = dogUserQueue.peek();
  const nextThree = dogUserQueue.nextThree();
  return res.status(200).json({ first, nextThree });
});

module.exports = usersRouter;
