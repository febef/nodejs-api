const router = require('express').Router();
module.exports = module.parent.exports;

router.get('/', (req, res) => {
    res.send("api v1!")
});

router.use('/personas',require('./personas'));

module.parent.exports.app.use('/api/v1', router);
