// controllers/matrixController.js
const matrixService = require('../services/matrixService');

const matrixController = {
    matrixStats: (req, res) => {
        const { Q, R } = req.body;

        if (!Q || !R || !Array.isArray(Q) || !Array.isArray(R)) {
            return res.status(400).json({ error: 'Invalid matrix input' });
        }

        try {
            const stats = matrixService.calculateMatrixStats(Q, R);
            res.json(stats);
        } catch (error) {
            res.status(500).json({ error: 'Error during matrix operations' });
        }
    }
};

module.exports = matrixController;