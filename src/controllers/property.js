"use strict";
const propertyModel = require("../models/property");

const Boom = require("@hapi/boom");

class BookingController {
  static async create(request, h) {
    try {
      const property = await propertyModel.create(request, h);
      return property;
    } catch (error) {
      throw Boom.internal();
    }
  }
  static async edit(request, h) {
    try {
      const property = await propertyModel.edit(request, h);
      return property;
    } catch (error) {
      throw Boom.internal();
    }
  }
  static async get(request, h) {
    try {
      const property = await propertyModel.get(request, h);
      return property;
    } catch (error) {
      throw Boom.internal();
    }
  }
  static async delete(request, h) {
    try {
      const id = request.params.id;
      if (id === undefined) {
        throw new error();
      }
      const property = await propertyModel.delete(id, h);
      return property;
    } catch (error) {
      throw Boom.internal();
    }
  }
}

module.exports = BookingController;
