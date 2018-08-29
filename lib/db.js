"use strict";

const mysql = require('mysql');
const db = mysql.createConnection(module.parent.exports.cfg.db);

module.exports = db;
