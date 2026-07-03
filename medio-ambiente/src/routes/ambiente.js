const express = require('express');
const router = express.Router();
const ambienteController = require('../controllers/ambienteController');

// Endpoints
router.get('/petroleo', ambienteController.petroleo);
router.get('/basura', ambienteController.basura);
router.get('/gases', ambienteController.gases);

module.exports = router;