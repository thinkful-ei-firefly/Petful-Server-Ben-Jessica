const express = require('express');
const usersRouter = express.Router();
const jsonParser = express.json();

const { catUserQueue, dogUserQueue } = require('./database');

usersRouter
  .route('/cats')
  .get((req, res) => {
    const catUsers = catUserQueue.displayAll();
    return res.status(200).json(catUsers);
  })
  .post(jsonParser, (req, res) => {
    const { id, name } = req.body;
    const newUser = { id, name };
    catUserQueue.enqueue(newUser);
    return res.status(200).json(newUser);
  });

usersRouter
  .route('/dogs')
  .get((req, res) => {
    const dogUsers = dogUserQueue.displayAll();
    return res.status(200).json(dogUsers);
  })
  .post(jsonParser, (req, res) => {
    const { id, name } = req.body;
    const newUser = { id, name };
    catUserQueue.enqueue(newUser);
    return res.status(200).json(newUser);
  });

module.exports = usersRouter;
