import axios from "axios";
import React, { useState } from "react";

const INITIAL_STATE = {
  updateProperty: () => {},
  createProperty: () => {},
  deleteProperty: () => {},
  property: []
};

//step 1 :  createContext
export const PropertyContext = React.createContext(INITIAL_STATE);

//step 2 :  create Provider :
export const PropertyContextProvider = ({ children }) => {
  const [property, setProperty] = useState([]);

  //get property data :
  React.useEffect(() => {
    axios
      .get("/property/")
      .then((response) => {
        setProperty(response.data);
      })
      .catch((error) => {
        console.log("Server can not get property info from data base", error);
      });
  }, []);
  const deleteProperty = (_id) => {
    axios
      .delete(`/property/${_id}`)
      .then((res) => {
        setProperty((prev) => {
          const newProperties = [...prev];
          const indexPropertyDeleted = newProperties.findIndex(
            (element) => element._id === _id
          );
          newProperties.splice(indexPropertyDeleted, 1);

          return newProperties;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateProperty = (updatedData) => {
    const { _id, price, city, address } = updatedData;
    if (updatedData) {
      axios
        .put(`/property/${_id}`, { price, address, city })
        .then((response) => {
          console.log(response.data);
          axios
            .get("/property/")
            .then((response) => {
              setProperty(response.data);
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

  const value = { property, deleteProperty, updateProperty };

  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
};

export const usePropertyContext = () => React.useContext(PropertyContext);
