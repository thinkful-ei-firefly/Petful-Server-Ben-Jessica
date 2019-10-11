const express = require('express');
const dogsRouter = express.Router();
const { dogQueue } = require('../database');

dogsRouter
  .route('/')
  .get((req, res) => {
    const results = dogQueue;
    return res.json(results);
  })
  .delete();

module.exports = dogsRouter;
