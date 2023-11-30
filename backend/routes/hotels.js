import express from 'express';
import Hotel from '../models/Hotel.js';
import { createError } from '../utils/error.js';
import  {createHotel, updateHotel, deleteHotel, getSingleHotel, getAllHotels, countByCity, countByType, getHotelRooms, distinctCities} from "../controllers/hotelController.js"
import { verifyAdmin } from '../utils/token.js';
import { countByCityWithRooms } from '../controllers/roomController.js';

const router = express.Router();


//CREATE
router.post('/',verifyAdmin,createHotel);
//UPDATE
router.put('/:id', verifyAdmin, updateHotel);
//DELETE
router.delete('/:id',verifyAdmin, deleteHotel);
//GET A SINGLE HOTEL
router.get('/find/:id', getSingleHotel); //this is endpoint for hotel.jsx
//GET ALL
router.get('/', getAllHotels)
router.get("/distinctCities", distinctCities)
router.get('/countByCity', countByCity)
router.get('/countByType', countByType)

//rooms:
router.get('/room/:id', getHotelRooms)
router.get("/countByCityWithRooms", countByCityWithRooms)
//limit still under process, need upgrade, controllers/hotel.js
export default router;