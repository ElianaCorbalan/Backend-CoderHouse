const express = require('express');
const routes = require('./src/routes/user');
const cors = require('cors');
const compression = require('compression');


const router = express.Router();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());
app.use(routes(router));

module.exports = app;