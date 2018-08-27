const router = require('express').Router();
const db = module.parent.exports.db;

router.get('/', (req, res) => {
    res.send("personas")
});

module.exports = router;
