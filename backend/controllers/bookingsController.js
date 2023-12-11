import Booking from "../models/BookingsModel.js";
/*import User from '../models/User.js';
import Property from '../models/PropertysModel.js'; */

export const getBookings = (req, res) => {
  res.send("fetching data since bookings data base");
};

export const createBooking = async (req, res, next) => {
  const newBooking = new Booking(req.body);

  try {
    const saveBooking = await newBooking.save();
    res.status(200).json(saveBooking);
  } catch (err) {
    next(err);
  }
};

//UPDATE:

export const updateBooking = async (req, res, next) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedBooking);
  } catch (err) {
    next(err);
  }
};
//DELETING:
export const deleteBooking = async (req, res, next) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.status(200).json("Booking  Deleted");
  } catch (err) {
    next(err);
  }
};

//GET A SINGLE HOTEL:
export const getSingleBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id);
    res.status(200).send(booking);
  } catch (err) {
    next(err);
  }
};
//GET ALL HOTELS:
export const getAllBookings = async (req, res, next) => {
  //const { min, max, ...others } = req.query;
  try {
    const bookings = await Booking.find()
      .populate("user", "firstName")
      .populate("property", "title");
    res.status(200).json(bookings);
  } catch (err) {
    next(err);
  }
};
