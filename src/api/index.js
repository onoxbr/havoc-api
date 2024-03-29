const express = require('express');

const ranks = require('./ranks');
const images = require('./images');
const maps = require('./maps');
const powerups = require('./powerups');
const utilities = require('./utilities');
const weapons = require('./weapons');
const news = require('./news');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'View havoc api docs: https://docs.havoc-api.site/',
  });
});

router.use('/ranks', ranks);
router.use('/images', images);
router.use('/maps', maps);
router.use('/powerups', powerups);
router.use('/utilities', utilities);
router.use('/weapons', weapons);
router.use('/news', news);

module.exports = router;
