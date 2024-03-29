const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect(process.env.MONGO_URI);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
