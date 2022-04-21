const express = require('express');
const { dbClient } = require('../config');

const servicesRoutes = express.Router();

// routes
// GET /api/services - grazina json "all services route"
servicesRoutes.get('/services', async (req, res) => {
  try {
    await dbClient.connect();

    const coll = dbClient.db('membership11').collection('services');
    const allArr = await coll.find().toArray();
    res.json(allArr);
  } catch (error) {
    console.error('error in get users', error);
    res.status(500).json('something is wrong');
  } finally {
    await dbClient.close();
  }
});

module.exports = servicesRoutes;
