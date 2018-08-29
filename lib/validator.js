"use strict";

const validate = require('validate.js-express');

validate.registerErrorFormatter( errors => {
  if (JSON.stringify(errors) !== "{}")
   errors.success = false;
  return errors;
});

module.exports = {
  v: validate.middleware,
  schemes: {
    path_id: { path: {id: { numericality: { strict: true } } } }
  }
};
