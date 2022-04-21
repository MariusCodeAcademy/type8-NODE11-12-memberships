const express = require('express');

const servicesRoutes = express.Router();

// routes
// GET /api/services - grazina json "all services route"
servicesRoutes.get('/services', async (req, res) => {
  res.json('all services route');
});

module.exports = servicesRoutes;
