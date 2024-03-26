/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
const express = require('express');
const content = require('../content.json');

const router = express.Router();

router.get('/', (req, res) => {
  if (req.query.name) {
    const data = content.powerups[req.query.name];
    if (data) {
      res.json({
        status: 200,
        data,
      });
    } else {
      res.status(400).json({
        status: 400,
        error: 'Powerup not found',
      });
    }
  } else {
    res.json({
      status: 200,
      weapons: content.powerups,
    });
  }
});

module.exports = router;
