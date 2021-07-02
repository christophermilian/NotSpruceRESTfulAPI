"use strict";

class Property {
  static async create() {
    try {
      const result = await request.pg.client.query(
        "INSERT INTO properties(id, name) VALUES (127, 'Milian Estates')"
      );
      return h.response(result.rows);
    } catch (err) {
      console.log(err);
    }
  }
  static async edit() {
    try {
      const result = await request.pg.client.query("");
      return h.response(result.rows);
    } catch (err) {
      console.log(err);
    }
  }
  static async get(request, h) {
    try {
      const result = await request.pg.client.query(
        "SELECT address FROM properties"
      );
      return h.response(result.rows);
    } catch (err) {
      console.log(err);
    }
  }
  static async delete(id) {
    try {
      const result = await request.pg.client.query(
        `DELETE from properties where id=${id}`
      );
      return h.response(result.rows);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Property;
