const express = require('express');
require('./config/dbConnect')
const ErrorResponse = require('./utils/error-utils/errorResponse');
const app = express();

const authRoutes = require('./routes/authRouter')


app.use(express.json())

app.use("/auth",authRoutes)

module.exports = app;