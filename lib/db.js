// require('dotenv').config();
import mysql from 'mysql2';

const connection = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'kp',
  waitForConnections: true,
  connectionLimit: 100
}).promise();

const getAccounts = async () => {
  const queryString = 'SELECT accounts.*, managers.name AS manager FROM accounts INNER JOIN managers ON accounts.manager_id = managers.id';
  const data = await connection.query(queryString);
  return data[0];
};

export default {
  getAccounts
};