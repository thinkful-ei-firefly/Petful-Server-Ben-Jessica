const express = require('express');
const dogsRouter = express.Router();
const { dogQueue, dogUserQueue } = require('./database');

dogsRouter
  .route('/')
  .get((req, res) => {
    const nextFour = dogQueue.nextFour();
    return res.status(200).json(nextFour);
  })
  .delete((req, res) => {
    if (!dogQueue.peek() || !dogUserQueue.peek()) {
      return res.status(400).json({ error: 'No dog or user found.' });
    }
    const dog = dogQueue.dequeue();
    const user = dogUserQueue.dequeue();
    return res.status(200).json({ dog, user });
  });

module.exports = dogsRouter;
