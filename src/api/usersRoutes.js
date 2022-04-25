const express = require('express');
const { ObjectId } = require('mongodb');
const { dbClient } = require('../config');

const userRoutes = express.Router();

// ROUTES
userRoutes.get('/users', async (req, res) => {
  try {
    await dbClient.connect();

    const coll = dbClient.db('membership11').collection('users');

    const allArr = await coll.find().toArray();
    res.json(allArr);
  } catch (error) {
    console.error('error in get users', error);
    res.status(500).json('something is wrong');
  } finally {
    await dbClient.close();
  }
});

userRoutes.post('/users', async (req, res) => {
  // console.log('new service ===', req.body);

  try {
    const newUserObj = req.body;
    newUserObj.service_id = new ObjectId(newUserObj.service_id);
    /// validation
    await dbClient.connect();

    const coll = dbClient.db('membership11').collection('users');
    const insertRezult = await coll.insertOne(newUserObj);
    if (insertRezult.insertedId) {
      console.log('insert ok');
      // jei siunciam tik status tai sendStatus()
      res.sendStatus(201);
      return;
    }
    throw new Error('insertRezult.insertedId false');
  } catch (error) {
    console.error('error post user', error);
    res.status(500).json('something is wrong');
  } finally {
    await dbClient.close();
  }
});

// commonJs
module.exports = userRoutes;
