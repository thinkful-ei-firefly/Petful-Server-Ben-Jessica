const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const { CLIENT_ORIGIN, PORT, NODE_ENV } = require('./config');
// const usersRouter = require('./users-router');
const catsRouter = require('./cats/cats-router');
const dogsRouter = require('./dogs/dogs-router');

const app = express();

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';
app.use(morgan(morganOption));
app.use(helmet());
app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

app.get('/', (req, res) => {
  res.send('Welcome to the Petful API!');
});

// app.use('/api/users', usersRouter);
app.use('/api/cats', catsRouter);
app.use('/api/dogs', dogsRouter);

// Catch-all 404
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

app.listen(PORT, () => {
  console.log(`Serving listening at http://localhost:${PORT} `);
});
