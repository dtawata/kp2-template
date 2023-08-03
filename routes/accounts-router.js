import express from 'express';
import controller from '../controllers/accounts-controller.js';
const router = express.Router();

router.get('/', controller.getAccounts);
router.get('/filter', controller.getDynamicAccounts);

export default router;