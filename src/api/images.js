/* eslint-disable linebreak-style */
/* eslint-disable prefer-destructuring */
/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    status: 200,
    header: 'https://cdn.glitch.global/7985612c-8cbd-4f64-91f9-e09b0e3029a9/header.jpg?v=1711229232038',
    banner: 'https://cdn.glitch.global/7985612c-8cbd-4f64-91f9-e09b0e3029a9/banner.png?v=1711229246456',
    banner2: 'https://cdn.akamai.steamstatic.com/steam/apps/2149290/capsule_616x353.jpg?t=1710885812',
    icon: 'https://cdn.glitch.global/7985612c-8cbd-4f64-91f9-e09b0e3029a9/icon.png?v=1711229241095'
  })
});

module.exports = router;
