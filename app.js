const express = require('express');

const cors = require('cors');

const userRouter = require('./rotas/userRouter');
const loginRouter = require('./rotas/loginRouter');

const dotenv = require('dotenv').config();

const app = express();

app.use(express.json());

app.use(cors())

app.use('/api', userRouter);
app.use('/api/auth', loginRouter);

app.set('port', process.env.PORT || 3333);

module.exports = app;