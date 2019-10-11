const express = require('express');
const catsRouter = express.Router();
const { cats } = require('./database');

catsRouter.route('/').get((req, res) => {
  const results = cats;
  return res.json(results);
});

catsRouter
  .route('/:cat_id')
  .get()
  .delete();

module.exports = catsRouter;
