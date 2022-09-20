const express = require('express');
const router = express.Router();

const universityV2Controller = require('../controllers/university.v2.controller');

router.get('/', async (req, res) => {
  await universityV2Controller.find(req, res);
});

module.exports = router;