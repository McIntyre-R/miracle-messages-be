const db = require("../config/dbConfig.js");

module.exports = { update, get, del };

function update(reunion) {
  return db("airtable").insert(reunion, "id");
}

function get() {
  return db("airtable")
    .orderBy('date', 'desc');
}

function del() {
  return db("airtable").del();
}
