const express = require('express');
const app = express();
const materialRouter = require('./routes/materialRoutes');
const AppError = require('./utils/appError');

app.use(express.json({ limit: '10kb' }));

app.use('/api/v1/materials', materialRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this `, 404));
});

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  console.log('AAAA');
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

module.exports = app;
