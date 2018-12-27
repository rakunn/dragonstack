const express = require('express');
const app = express();

const GenerationEngine = require('./generation/generationEngine');
const dragonRouter = require('./api/dragon');
const generationRouter = require('./api/generation');

const engine = new GenerationEngine;

app.locals.engine = engine;

engine.start();

app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter);

module.exports = app;