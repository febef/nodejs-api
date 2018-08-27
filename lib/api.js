// api
const cfg = module.exports.cfg = require('../configs.json');
const db  = module.exports.db  = require('./db.js');
const app = module.exports.app = require('./server.js');

require("./api/v1");

app.all('*', (req, res) => { res.redirect('/');});

app.listen(cfg.server.port, () => {
  console.log('API listening on port ', cfg.server.port);
});
