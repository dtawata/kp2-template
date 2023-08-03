import express from 'express';
import controller from '../controllers/accounts-controller.js';
const router = express.Router();

router.get('/', controller.getAccounts);

export default router;