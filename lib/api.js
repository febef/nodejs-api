"use strict";
// api
const cfg = module.exports.cfg = require('../configs.json');
const db  = module.exports.db  = require('./db');
const app = module.exports.app = require('./server');
const v   = module.exports.validator = require('./validator');

require("./api/v1");

app.use((req, res) => { res.redirect('/');});
app.listen(cfg.server.port, () => {
  console.log('API listening on port ', cfg.server.port);
});
