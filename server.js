const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const path = require('path');

const db = require('./db');
const seed = require('./db/seed');


app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')))


app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

db.sync()
  .then(seed)
  .then(() => {
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    })
  })
