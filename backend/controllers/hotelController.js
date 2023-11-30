import Hotel from "../models/Hotel.js"
import Room from "../models/Room.js"

//kopiras samo ono unutar rute samo to
export const createHotel = async (req, res, next) =>  {
    const newHotel = new Hotel(req.body)

    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }catch(err){
        next(err)
    }
}

//UPDATE:

export const updateHotel = async (req, res, next) =>  {
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, 
            {$set: req.body},
            {new: true}
            )
        res.status(200).json(updatedHotel)
    }catch(err){
        next(err)
    }
};
//DELETING:
export const deleteHotel = async (req, res, next) =>  {

    try{
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json('Hotel Deleted')
    }catch(err){
        next(err)
    }
}

//GET A SINGLE HOTEL:
export const getSingleHotel = async (req, res, next) => {
    try{
    const hotel = await Hotel.findById(req.params.id)
    res.status(200).send(hotel);
    }catch(err){
    next(err)
}
}
//GET ALL HOTELS:
export const getAllHotels = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 99999 },
    }).limit(req.query.limit);
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};
//Model for pickinbg cities out of db:
export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
      const list = await Promise.all(
        cities.map((city) => {
          return Hotel.countDocuments({ city: city });
        })
      );
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
  };
  /// Model for distinct cities
  export const distinctCities = async (req, res, next) => {
   
    try {
      const result = await Hotel.aggregate([
          {
              $group: {
                  _id: "$city", // Group by city
                  hotels: { $push: "$$ROOT" } // Push each document into an array
              }
          },
          {
              $project: {
                  _id: 0, // Exclude the _id field
                  city: "$_id", // Remap '_id' to 'city'
                  hotels: 1 // Include the array of hotels
              }
          }
      ]);

      res.status(200).json(result);
  } catch (err) {
      next(err);
  }
};

//Picking basing on type:
export const countByType = async (req, res, next) => {
    try {
      const hotelCount = await Hotel.countDocuments({ type: "hotel" });
      const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
      const resortCount = await Hotel.countDocuments({ type: "resort" });
      const villaCount = await Hotel.countDocuments({ type: "villa" });
      const cabinCount = await Hotel.countDocuments({ type: "cabin" });
      // Hotel.aggregate([

      // ])
      res.status(200).json([
        { type: "hotel", count: hotelCount },
        { type: "apartments", count: apartmentCount },
        { type: "resorts", count: resortCount },
        { type: "villas", count: villaCount },
        { type: "cabins", count: cabinCount },
      ]);
    } catch (err) {
      next(err);
    }
  };

  //getRoom:
  export const getHotelRooms = async (req, res, next) => {
    try {
      const hotel = await Hotel.findById(req.params.id);
      //there are more rooms:
      const list = await Promise.all(
        hotel.rooms.map((room) => {
          return Room.findById(room);
        })
      );
      res.status(200).json(list)
    } catch (err) {
      next(err);
    }
  };
