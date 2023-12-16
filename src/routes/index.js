const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    'text' : 'ok',
    'message' : 'express + docker',
    'data' : null
  })
});

module.exports = router;
