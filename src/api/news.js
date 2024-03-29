/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
const express = require('express');

const NewsENUS = require('../schemas/NewsENUS');
const NewsPTBR = require('../schemas/NewsPTBR');

const router = express.Router();

router.get('/', async (req, res) => {
  if (!req.query.lang || req.query.lang === 'en-US' || req.query.lang === 'en-us') {
    const data = await NewsENUS.find({}, '-__v -_id');
    res.json({
      status: 200,
      data,
    });
  } else if (req.query.lang === 'pt-BR' || req.query.lang === 'pt-br') {
    const data = await NewsPTBR.find({}, '-__v -_id');
    res.json({
      status: 200,
      data,
    });
  } else {
    res.status(400).json({
      status: 400,
      error: 'Invalid language',
    });
  }
});

module.exports = router;
