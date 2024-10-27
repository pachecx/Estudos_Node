//Limitar as conexões do banco

const mysql = require("mysql2");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "123456",
  database: "nodemysql2",
});

module.exports = pool;
