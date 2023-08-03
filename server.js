import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import accountsRouter from './routes/accounts-router.js';
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static('public'));
app.use(express.json());

app.use('/api/accounts', accountsRouter);

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});