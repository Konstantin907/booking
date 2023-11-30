import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const INITIAL_STATE = {
  customers: [],
  updateCustomer: () => {},
  deleteCustomer: () => {},
  postCustomer: () => {},
};

const CustomerContext = createContext(INITIAL_STATE); //step1

export const CustomerContextProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios
      .get("/users/testing")
      .then((res) => setCustomers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const updateCustomer = (user) => {
    const { _id, firstName, lastName, email } = user;
    axios
      .put(`/users/testing/${_id}`, { firstName, lastName, email })
      .then((response) => {
        const updatedUser = response.data;

        setCustomers((prev) => {
          const users = [...prev];
          const updatedUserIndex = users.findIndex(
            (state) => state._id === updatedUser._id
          );
          users.splice(updatedUserIndex, 1, updatedUser);

          return users;
        });
      })
      .catch((err) => {
        console.log("You got an error editing data (handleEdit): ", err);
      });
  };

  const deleteCustomer = (user_id) => {
    // delete the user
    axios
      .delete(`/users/testing/${user_id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setCustomers((prev) => {
      const users = [...prev];
      const userIndex = users.findIndex((state) => state._id === user_id);
      users.splice(userIndex, 1);

      return users;
    });
  };
  const postCustomer = (customerData) => {
    axios
      .post("/auth/register", {
        firstName: customerData.firstName,
        lastName: customerData.lastName,
        email: customerData.email,
        password: customerData.password,
      })
      .then((response) => {
        //console.log(response.data);
        setCustomers((prev) => {
          const users = [...prev, response.data];
          return users;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const value = { customers, updateCustomer, deleteCustomer, postCustomer };

  return (
    <CustomerContext.Provider value={value}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomerContext = () => useContext(CustomerContext);
