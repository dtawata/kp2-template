import 'dotenv/config';
import mysql from 'mysql2';

const connection = mysql.createPool({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  waitForConnections: true,
  connectionLimit: 100
}).promise();

const getAccounts = async () => {
  const queryString = 'SELECT accounts.*, managers.name AS manager, recommendations.prediction FROM accounts INNER JOIN managers ON accounts.manager_id = managers.id INNER JOIN recommendations ON recommendations.account_id = accounts.id';
  const data = await connection.query(queryString);
  return data[0];
};

const getDynamicAccounts = async (queryString, queryArgs) => {
  const data = await connection.query(queryString, queryArgs);
  console.log('test', data[0]);
  return data[0];
};

export default {
  getAccounts,
  getDynamicAccounts
};