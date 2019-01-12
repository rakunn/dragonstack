const express = require('express');
const app = express();
const cors = require('cors');

const dragonRouter = require('./api/dragon');
const generationRouter = require('./api/generation');

const GenerationEngine = require('./generation/generationEngine');
const engine = new GenerationEngine();

app.locals.engine = engine;

engine.start();

app.use(cors());
app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    type: 'error', message: 'internal server error',
  });
});

module.exports = app;