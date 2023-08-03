import express from 'express';
const app = express();
import accountsRouter from './routes/accounts-router.js';

app.use(express.static('public'));
app.use(express.json());

app.use('/api/accounts', accountsRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});