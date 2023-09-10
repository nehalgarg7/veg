const mongoose = require("mongoose");
const MONGODB_URL =
  "mongodb://localhost:27017/Data";

// mongoDb database connection
const databaseconnect = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/User")
    .then((conn) => console.log(`connected to DB: ${conn.connection.host}`))
    .catch((err) => console.log(err.message));
};

module.exports = databaseconnect;
