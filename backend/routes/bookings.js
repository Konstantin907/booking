import express from 'express';
import {getBookings} from '../controllers/bookingsController.js';

const router  = express.Router();

router.get('/testing',getBookings);

export default router;