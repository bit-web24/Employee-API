const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes');
const paginate = require("express-paginate");

require('dotenv').config();

const PORT = process.env.PORT;

const app = express();
app.use(bodyParser.json());
app.use('/', routes);
app.use(express.urlencoded({
	extended: false
}));
app.use(paginate.middleware(5, 10));

app.listen(PORT, ()=>{
    console.log(`API server running on port: ${PORT}`);
});