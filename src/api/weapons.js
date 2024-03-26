/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
const express = require('express');
const content = require('../content.json');

const router = express.Router();

router.get('/', (req, res) => {
  if (req.query.name) {
    const data = content.weapons.primaries[req.query.name] || content.weapons.secondaries[req.query.name];
    if (data) {
      res.json({
        status: 200,
        data,
      });
    } else {
      res.status(400).json({
        status: 400,
        error: 'Weapon not found',
      });
    }
  } else {
    res.json({
      status: 200,
      weapons: content.weapons,
    });
  }
});

module.exports = router;
