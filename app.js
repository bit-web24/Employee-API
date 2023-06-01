const express = require('express');
const { json } = require('body-parser');
const routes = require('./src/routes');
const paginate = require('express-paginate');

require('dotenv').config();

const PORT = process.env.PORT;

const app = express();

app.use(json());
app.use(paginate.middleware(5, 10));
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`API server running on port: ${PORT}`);
});