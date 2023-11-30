import express from 'express';
import {getProperty} from '../controllers/propertyController.js';

const router  = express.Router();

router.get('/testing',getProperty);

export default router;