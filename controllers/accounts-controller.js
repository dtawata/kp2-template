import db from '../lib/db.js';

const getAccounts = async (req, res) => {
  const accounts = await db.getAccounts();
  res.send(accounts);
};

export default {
  getAccounts
};