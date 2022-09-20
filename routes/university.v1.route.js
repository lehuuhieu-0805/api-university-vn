const express = require('express');
const router = express.Router();

const universityV1Controller = require('../controllers/university.v1.controller');

router.get('/', async (req, res) => {
  await universityV1Controller.find(req, res);
});

router.post('/', async (req, res) => {
  await universityV1Controller.create(req, res);
});

module.exports = router;