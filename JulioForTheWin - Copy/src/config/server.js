const express = require('express');

const app = express();

app.use(express.json());

app.set("PORT", 4000);

module.exports = app;