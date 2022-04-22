const express = require('express');
const { ObjectId } = require('mongodb');
const { dbClient } = require('../config');

const servicesRoutes = express.Router();

// routes
// GET /api/services - grazina json "all services route"
servicesRoutes.get('/services', async (req, res) => {
  try {
    await dbClient.connect();

    const coll = dbClient.db('membership11').collection('services');
    // aggreguoti su useriais
    const allArr = await coll.find().toArray();
    res.json(allArr);
  } catch (error) {
    console.error('error in get users', error);
    res.status(500).json('something is wrong');
  } finally {
    await dbClient.close();
  }
});

servicesRoutes.post('/services', async (req, res) => {
  // console.log('new service ===', req.body);

  try {
    const newServiceObj = req.body;
    await dbClient.connect();

    const coll = dbClient.db('membership11').collection('services');

    const insertRezult = await coll.insertOne(newServiceObj);
    res.json(insertRezult);
  } catch (error) {
    console.error('error in get users', error);
    res.status(500).json('something is wrong');
  } finally {
    await dbClient.close();
  }
});

//DELETE /api/services/:serId - tuscias routes kuris grazina 'serId'
servicesRoutes.delete('/services/:serId', async (req, res) => {
  try {
    const stringId = req.params.serId;
    const mongoObjId = new ObjectId(stringId);
    await dbClient.connect();

    // pasitikrinti ar service turi useriu.
    // jei turi netrinam ir apie tai pranesam

    const coll = dbClient.db('membership11').collection('services');
    const deleteRezult = await coll.deleteOne({ _id: mongoObjId });
    // isitikinti kad istikro buvi istrinta
    if (deleteRezult.deletedCount === 1) {
      res.status(200).json({ success: true });
      return;
    }
    if (deleteRezult.deletedCount === 0) {
      res.status(400).json({ err: 'no thing was deleted' });
      return;
    }
    res.status(500).json('something is wrong');
  } catch (error) {
    console.error('error in delete user', error);
    res.status(500).json('something is wrong');
  } finally {
    await dbClient.close();
  }
});

module.exports = servicesRoutes;
