import express from 'express';
import { getListeners } from '../controllers/listenerController.js';

const router = express.Router();

router.get('/get-listener', getListeners);

export default router;
