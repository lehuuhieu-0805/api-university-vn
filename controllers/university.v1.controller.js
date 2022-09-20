const universityModel = require("../models/university.model");

const create = (req, res) => {
  universityModel.create(req.body)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => res.status(500).json({ error: err }));
};

const find = (req, res) => {
  const name = req.query.name || '';

  universityModel.find({ name: { $regex: '.*' + name + ".*", $options: 'i' } })
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => res.status(500).json({ error: err }));
};

module.exports = { create, find };