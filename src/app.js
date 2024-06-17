const express = require('express');
const mailController = require('./controllers/emailController');

const app = express();
const port = 3001;
app.use(express.json());

app.post('/sendEmail', mailController.enviarEmail);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});