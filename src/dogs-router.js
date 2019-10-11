const express = require('express');
const dogsRouter = express.Router();
const { dogs } = require('./database');

dogsRouter.route('/').get((req, res) => {
  const results = dogs;
  return res.json(results);
});

dogsRouter
  .route('/:dog_id')
  .get()
  .delete();

module.exports = dogsRouter;
