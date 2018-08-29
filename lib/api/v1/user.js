"use strict";
const r = require('express').Router();
const db = module.parent.exports.db;
const {v, schemes} = module.parent.exports.validator;

r.get('/', (req, res) => {
    db.connect(() => {
       db.query( 'select * from users', (err, results, fields) => {
        if (err) return res.json({success:false});
        res.json({success: true, users: results});
      });
    });
});

r.get('/:id', v(schemes.path_id), (req, res) => {
    db.connect(() => {
       db.query( `select * from users where id=${req.params.id}`, (err, results, fields) => {
       if (err) return res.json({success:false});
        res.json({success: true, user: results[0]});
      });
    });
});

r.post('/' , (req, res) => {
  let user =  req.body.user | { name: "juan"};

  res.json({susccess: true, user});
});

r.put('/:id', (req, res) => {

  res.json({success: true})
});

r.delete('/:id', (req, res) => {
  res.json({susccess: true});
});

module.exports = r;
