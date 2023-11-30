import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
//INITIAL STATE of context  :
const INITIAL_STATE = {
  updatedBooking: () => {},
  deleteBooking: () => {},
  bookingsData: [],
  createBooking: () => {},
};
//Step 1  create context  :
const BookingContext = createContext(INITIAL_STATE);

export const BookingContextProvider = ({ children }) => {
  const [bookingsData, setBookingsData] = useState([]);

  useEffect(() => {
    axios
      .get("/bookings/testing")
      .then((response) => {
        setBookingsData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const value = { bookingsData };

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
};

export const useBookingContext = () => useContext(BookingContext);
