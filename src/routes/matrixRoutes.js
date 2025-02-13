// routes/matrixRoutes.js
const express = require('express');
const matrixController = require('../controllers/matrixController');

const router = express.Router();

router.post('/matrix-stats', matrixController.matrixStats);

module.exports = router;