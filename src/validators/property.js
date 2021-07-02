"use strict";

const Joi = require("joi");

exports.get = {
  payload: Joi.object().keys({
    name: Joi.string().required(),
  }),
};
exports.create = {
  payload: Joi.object().keys({
    name: Joi.string().required(),
  }),
};
exports.edit = {
  params: {
    id: Joi.number().required(),
  },
  payload: Joi.object().keys({
    name: Joi.string().required(),
  }),
};
exports.delete = {
  params: {
    id: Joi.number().required(),
  },
};
