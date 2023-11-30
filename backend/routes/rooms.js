import express from 'express';
import { createRoom, updateRoom, deleteRoom,getSingleRoom, getAllRooms, updateRoomAvailability, countByCityWithRooms } from '../controllers/roomController.js';
import { verifyAdmin } from '../utils/token.js';
const router = express.Router();

//CREATE
router.post('/:hotelid',verifyAdmin, createRoom);
//UPDATE
router.put('/:id', verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);
//DELETE
router.delete('/:id/:hotelid',verifyAdmin, deleteRoom); //hotelid
//GET A SINGLE HOTEL
router.get('/:id', getSingleRoom);

//GET ALL
router.get('/', getAllRooms)





export default router;