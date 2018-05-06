const router = require('express').Router()
const { Team } = require('../db').models

router.get('/', (req, res, next) => {
  Team.findAll()
  .then(teams => {
    res.json(teams);
  })
  .catch(next)
})


module.exports = router
