// config/server.js
const express = require('express');
const matrixRoutes = require('../routes/matrixRoutes');

const app = express();
const port = 3001;

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api', matrixRoutes);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`API 2 running on http://localhost:${port}`);
});