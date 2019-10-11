const express = require('express');
const catsRouter = express.Router();
const { catQueue } = require('../database');

catsRouter
  .route('/')
  .get((req, res) => {
    // const results = catQueue.display();
    // return res.json(results);
  })
  .delete();

module.exports = catsRouter;
