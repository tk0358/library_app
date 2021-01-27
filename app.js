const express = require('express');
const app = express();
const path = require('path');
const materialRouter = require('./routes/materialRoutes');
const libraryRouter = require('./routes/libraryRoutes');
const viewRouter = require('./routes/viewRoutes');
const borrowingRouter = require('./routes/borrowingRoutes');
const AppError = require('./utils/appError');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json({ limit: '10kb' }));

app.use('/', viewRouter);

app.use('/api/v1/materials', materialRouter);
app.use('/api/v1/libraries', libraryRouter);
app.use('/api/v1/borrowings', borrowingRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this `, 404));
});

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

module.exports = app;
