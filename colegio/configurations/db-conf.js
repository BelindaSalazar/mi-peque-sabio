const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    use: "root",
    password: "nekochampu",
    database: "pequeño_sabio"

  });

  mysqlConnection.connect(function (err) {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log('Ahora estamos en Linea :D');
    }
  });

  module.exports = mysqlConnection;