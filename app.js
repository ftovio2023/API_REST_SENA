const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware para permitir CORS
app.use(cors());

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(bodyParser.json());

// Importa las rutas de autenticación
const authRoute = require('./routes/auth');
app.use('/api/user', authRoute);

// Ruta de prueba para verificar que el servidor esté funcionando
app.get('/', (req, res) => {
    res.send('API REST funcionando');
});

// Conexión a la base de datos MongoDB
mongoose.connect(
    'mongodb+srv://iasena2023:mUQpx147yRJnfLCR@sena.xjnewnv.mongodb.net/test?retryWrites=true&w=majority&appName=SENA',
    { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log('Conectado a la base de datos'))
.catch(err => console.error('No se pudo conectar a la base de datos', err));

// Configura el puerto en el que el servidor escuchará las solicitudes
const PORT = 10000;
app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto ${PORT}`);
});
