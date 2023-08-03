import db from '../lib/db.js';

const getAccounts = async (req, res) => {
  const accounts = await db.getAccounts();
  res.send(accounts);
};

const getDynamicAccounts = async (req, res) => {
  const { query } = req;
  console.log('query', query);
  let queryString = 'SELECT accounts.*, managers.name AS manager, recommendations.prediction FROM accounts INNER JOIN managers ON accounts.manager_id = managers.id INNER JOIN recommendations ON recommendations.account_id = accounts.id';
  const queryArgs = [];
  const map = {
    manager: 'managers.name',
    year: 'accounts.year',
    zipcode: 'accounts.zipcode',
    stage: 'accounts.stage'
  };
  let first = true;
  for (const key in query) {
    if (query[key]) {
      if (first) {
        queryString += ` WHERE ${map[key]} = ?`;
        first = false;
      } else {
        queryString += ` AND ${map[key]} = ?`;
      }
      queryArgs.push(query[key]);
    }
  }
  const accounts = await db.getDynamicAccounts(queryString, queryArgs);
  res.send(accounts);
};

export default {
  getAccounts,
  getDynamicAccounts
};

"SELECT accounts.*, managers.name AS manager FROM accounts INNER JOIN managers ON accounts.manager_id = managers.id WHERE managers.name = 'Ginny' AND WHERE accounts.zipcode = '90812'"