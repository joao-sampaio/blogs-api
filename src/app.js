const express = require('express');
const router = require('./routers');

// ...

const app = express();

app.use(express.json());

// ...

app.use('/login', router.login);
app.use('/user', router.users);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
