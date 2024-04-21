const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
  user: 'root',
  password: 'Mayank@123',
  database: 'cricket'
})
module.exports  = pool.promise();