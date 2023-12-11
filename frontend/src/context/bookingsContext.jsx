import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
//INITIAL STATE of context  :
const INITIAL_STATE = {
  updatedBooking: () => {},
  deleteBooking: () => {},
  bookingsData: [],
  createBooking: () => {}
};
//Step 1  create context  :
const BookingContext = createContext(INITIAL_STATE);

export const BookingContextProvider = ({ children }) => {
  const [bookingsData, setBookingsData] = useState([]);

  useEffect(() => {
    axios
      .get("/bookings/")
      .then((response) => {
        setBookingsData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteBooking = (_id) => {
    axios
      .delete(`/bookings/${_id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setBookingsData((prev) => {
      const users = [...prev];
      const userIndex = users.findIndex((state) => state._id === _id);
      users.splice(userIndex, 1);

      return users;
    });
  };
  const updateBooking = (updatedData) => {
    const { _id, checkInDate, checkOutDate } = updatedData;
    if (updatedData) {
      axios
        .put(`/bookings/${_id}`, { checkInDate, checkOutDate })
        .then((response) => {
          console.log(response.data);
          axios
            .get("/bookings/")
            .then((response) => {
              setBookingsData(response.data);
            })
            .catch((err) => {
              console.log(err);
            });

          alert("it was succesfully updated");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("the information did not save succesfully");
    }
  };

  const value = { bookingsData, deleteBooking, updateBooking };

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
};

export const useBookingContext = () => useContext(BookingContext);
