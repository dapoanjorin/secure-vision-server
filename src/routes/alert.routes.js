const express = require('express');
const router = express.Router();
const { createAlert, getAlerts } = require('../controllers/alert.controller');

router.post('/', createAlert); // Endpoint to receive alerts
router.get('/', getAlerts);    // Get all alerts

module.exports = router;
