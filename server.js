const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

//setup postgres database
const db = require('./db');
const seed = require('./db/seed');

// setup mongo database
const mongoDb = require('./mongo');
const { Customer } = require('./mongo').collections;


// fetch files locally
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')))

// 'API' routes
app.use('/teams', require('./routes/teams'))

app.get('/customers', (req, res, next) => {
  Customer.then( col => {
    return col.find({}).toArray();
  })
  .then( custs => {
    res.json(custs);
  })
  .catch(err => {
    console.log(err);
  })
})

// home route
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

// start the app with postgres database
db.sync()
  .then(seed)
  .then(() => {
    return mongoDb.conn
  })
  .then(() => {
    return mongoDb.seed()
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    })
  })

// start the app with mongo database
