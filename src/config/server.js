// config/server.js
const express = require('express');
const cors = require('cors');
const matrixRoutes = require('../routes/matrixRoutes');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api', matrixRoutes);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`API 2 running on http://localhost:${port}`);
});