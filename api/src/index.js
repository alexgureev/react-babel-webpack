var router = require('express').Router();
var mocks = require('./mocks');

router.get('/mocks', function (req, res, next) {
    res.json(mocks)
});

module.exports = router;
