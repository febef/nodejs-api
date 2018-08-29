"use strict";

const router = require('express').Router();
module.exports = module.parent.exports;

// api resurces
router.use('/users', require('./users'));

// api default
router.get('/', (req, res) => { res.send("api v1!")});
module.parent.exports.app.use('/api/v1', router);
