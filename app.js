const express = require('express');
const app = express();
const materialRouter = require('./routes/materialRoutes');

app.use(express.json({ limit: '10kb' }));

app.use('/api/v1/materials', materialRouter);

module.exports = app;
