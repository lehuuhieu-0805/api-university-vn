const universityModel = require("../models/university.model");

const find = (req, res) => {
  const name = req.query.name || '';

  universityModel.find({ name: { $regex: '.*' + name + ".*", $options: 'i' } }, { _id: 0, name: 1 })
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => res.status(500).json({ error: err }));
};

module.exports = { find };