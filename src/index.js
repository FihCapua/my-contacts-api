const express = require('express');
const router = require('./routes');
const cors = require('./app/middlewares/cors');
const handleError = require('./app/middlewares/handleError');
require('express-async-errors');

const app = express();

app.use(express.json());
app.use(cors)
app.use(router);
app.use(handleError);

app.listen(3001, () => console.log('Server is running on http://localhost:3001'));
