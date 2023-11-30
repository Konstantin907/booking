import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js"


//znaci nako sto dodas sobu moras je dodati u hotel model

//CREATING ROOM:
export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body)

    try {
        const savedRoom = await newRoom.save()

        try {
        await Hotel.findByIdAndUpdate(hotelId,
             { $push: { rooms: savedRoom._id }
            });
        } catch (err) {
            next(err)
        }

        res.status(200).json(savedRoom)
    } catch (err) {
        next(err)
    }
}

//
//UPDATE:

export const updateRoom = async (req, res, next) =>  {
    try{
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, 
            {$set: req.body},
            {new: true}
            )
        res.status(200).json(updatedRoom)
    }catch(err){
        next(err)
    }
};

//UPDATE ROOM AVAILIBILITY:
export const updateRoomAvailability = async (req, res, next) => {
    try {
      await Room.updateOne(
        { "roomNumbers._id": req.params.id },
        {
          $push: {
            "roomNumbers.$.unavailableDates": req.body.dates
          },
        }
      );
      res.status(200).json("Room status has been updated.");
    } catch (err) {
      next(err);
    }
  };


//DELETING:
export const deleteRoom = async (req, res, next) =>  {
    const hotelId = req.params.hotelid;

    try {
        await Hotel.findByIdAndUpdate(hotelId,
             { $pull: { rooms: req.params.id }
            });
        } catch (err) {
            next(err)
        }

    try{
        await Room.findByIdAndDelete(req.params.id)
        res.status(200).json('Room Deleted')
    }catch(err){
        next(err)
    }
}

//GET A SINGLE HOTEL:
export const getSingleRoom = async (req, res, next) => {
    try{
    const room = await Room.findById(req.params.id)
    res.status(200).send(room);
    }catch(err){
    next(err)
}
}
//GET ALL HOTELS:
export const getAllRooms = async (req, res, next) =>  {
    try{
    const rooms = await Room.find()
    res.status(200).send(rooms);
    }catch(err){
    next(err)
}
}


export const countByCityWithRooms = async (req, res, next) => {
    try {
      const result = await Hotel.find({ city: "podgorica" })
        .populate("rooms")
        .count();
  
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };


