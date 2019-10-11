const express = require('express');
const catsRouter = express.Router();
const { catQueue, catUserQueue } = require('./database');

catsRouter
  .route('/')
  .get((req, res) => {
    const first = catQueue.peek();
    const nextThree = catQueue.nextThree();
    return res.status(200).json({ first, nextThree });
  })
  .delete((req, res) => {
    if (!catQueue.peek() || !catUserQueue.peek()) {
      return res.status(400).json({ error: 'No cat or user found.' });
    }
    const cat = catQueue.dequeue();
    const user = catUserQueue.dequeue();
    return res.status(200).json({ cat, user });
  });

module.exports = catsRouter;
