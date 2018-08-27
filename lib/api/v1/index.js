const router = require('express').Router();
const db = module.parent.exports.db;

router.get('/', function(req, res) {
    res.send("api v1!")
});

module.exports = router;
