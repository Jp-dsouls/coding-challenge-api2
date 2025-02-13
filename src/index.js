const express = require('express');
const math = require('mathjs');
const app = express();
const port = 3001;

// Middleware para parsear JSON
app.use(express.json());

// Endpoint para operaciones adicionales
app.post('/matrix-stats', (req, res) => {
    const { Q, R } = req.body;

    if (!Q || !R || !Array.isArray(Q) || !Array.isArray(R)) {
        return res.status(400).json({ error: 'Invalid matrix input' });
    }

    try {
        const matrices = [Q, R];
        const flatValues = matrices.flat(2); // Aplanar matrices

        const max = Math.max(...flatValues);
        const min = Math.min(...flatValues);
        const sum = flatValues.reduce((a, b) => a + b, 0);
        const avg = sum / flatValues.length;

        const isDiagonal = matrices.some(matrix => {
            return matrix.every((row, i) => row.every((val, j) => i === j || val === 0));
        });

        res.json({ max, min, sum, avg, isDiagonal });
    } catch (error) {
        res.status(500).json({ error: 'Error during matrix operations' });
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`API 2 running on http://localhost:${port}`);
});