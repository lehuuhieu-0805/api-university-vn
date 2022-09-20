const express = require('express');
const router = express.Router();

const universityController = require('../controllers/university.controller');

router.get('/', async (req, res) => {
  await universityController.find(req, res);
});

router.post('/', async (req, res) => {
  await universityController.create(req, res);
});

module.exports = router;