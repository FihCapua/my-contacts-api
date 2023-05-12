const express = require('express');
const router = require('./routes');
require('express-async-errors');

const app = express();

app.use(express.json());
app.use(router);
app.use((error, request, response, next) => {
  console.log('### Error handler ###');
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
