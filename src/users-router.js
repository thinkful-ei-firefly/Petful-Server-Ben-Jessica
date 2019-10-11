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

usersRouter.route('/cats/:user_id').get((req, res) => {
  const length = catUserQueue.length();
  const position = catUserQueue.placeInQueue(req.params.user_id);
  if (!length || !position) {
    return res.status(400);
  }
  return res.status(200).json({ length, position });
});

usersRouter.route('/dogs/:user_id').get((req, res) => {
  const length = dogUserQueue.length();
  const position = dogUserQueue.placeInQueue(req.params.user_id);
  if (!length || !position) {
    return res.status(400);
  }
  return res.status(200).json({ length, position });
});

module.exports = usersRouter;
