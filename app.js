const express = require('express');
const app = express();
const tourRouter = require('./routes/tourRoute');
const AppError = require('./utils/appError');
const globelErrorHandler = require('./controllers/errorcontroller');

app.use(express.json());

app.use('/api/tours', tourRouter);
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} in server`, 404));
});

app.use(globelErrorHandler);

module.exports = app;
