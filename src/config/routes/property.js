const controller = require("../../controllers/property");

const validator = require("../../validators/property");

// TODO: Check HAPI docs and learn how to add validators with v20.1.5
module.exports = [
  {
    method: "GET",
    path: "/property",
    handler: controller.get,
    //validate: validator.get,
    config: {
      description: "Returns a list of all properties",
    },
  },
  {
    method: "POST",
    path: "/property",
    handler: controller.create,
    config: {
      //validate: validator.create,
      description: "Creates a property",
    },
  },
  {
    method: "PATCH",
    path: "/property/{id}",
    handler: controller.edit,
    //validate: validator.edit,
    config: {
      description: "Updates an already-existing property",
    },
  },
  {
    method: "DELETE",
    path: "/property/{id}",
    handler: controller.delete,
    config: {
      //validate: validator.delete,
      description: "Deletes an already-existing property",
    },
  },
];
