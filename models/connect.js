const {createPool} = require('mysql2/promise');

const pool = createPool({
  host: 'YOUR_MYSQL_PUBLIC_IP',
  user: 'root',
  password: 'YOUR_MYSQL_PASSWORD',
  database: 'YOUR_MYSQL_DATABASE',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Gagal terhubung ke Cloud SQL:', err);
    return;
  }
  console.log('Terhubung ke Cloud SQL:');
  connection.release();
});

module.exports = pool;
