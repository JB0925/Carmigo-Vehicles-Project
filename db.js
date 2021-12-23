"use strict";

const { Client } = require("pg");

const DATABASE_URI = process.env.DATABASE_URL || "vehicles";


let db;

if (process.env.NODE_ENV === "production") {
  db = new Client({
    connectionString: DATABASE_URI,
    ssl: {
      rejectUnauthorized: false
    }
  });
} else {
  db = new Client({
    connectionString: DATABASE_URI
  });
}

db.connect();

module.exports = db;