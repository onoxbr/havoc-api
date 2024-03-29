/* eslint-disable linebreak-style */
const db = require('mongoose');

const News = new db.Schema({
  content: { type: String, required: true },
  date: { type: Date },
});

module.exports = db.model('NewsENUS', News);
