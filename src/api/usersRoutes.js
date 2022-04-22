const express = require('express');
const { dbClient } = require('../config');

const userRoutes = express.Router();

// ROUTES
userRoutes.get('/users', async (req, res) => {
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
// commonJs
module.exports = userRoutes;
