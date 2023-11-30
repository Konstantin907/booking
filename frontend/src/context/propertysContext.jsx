import React, { useState } from "react";
import axios from "axios";

const INITIAL_STATE = {
  updateProperty: () => {},
  createProperty: () => {},
  deleteProperty: () => {},
  property: [],
};

//step 1 :  createContext
export const PropertyContext = React.createContext(INITIAL_STATE);

//step 2 :  create Provider :
export const PropertyContextProvider = ({ children }) => {
  const [property, setProperty] = useState([]);

  //get property data :
  React.useEffect(() => {
    axios
      .get("/property/testing")
      .then((response) => {
        setProperty(response.data);
      })
      .catch((error) => {
        console.log("Server can not get property info from data base", error);
      });
  }, []);

  const value = { property };
  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
};

export const usePropertContext = () => React.useContext(PropertyContext);
