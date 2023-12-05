import React from "react";
import DataTable from "./fetchDataToTable/bookingsTable.jsx";
import { useBookingContext } from "../../../context/bookingsContext.jsx";

export default function Bookings({ setAddModal, addModal }) {
  const { bookingsData } = useBookingContext();
  console.log(bookingsData);
  const namesOfColumns = {
    c1: "ID",
    c2: "User Name",
    c3: "Rol",
    c4: "Property",
    c5: "check-in",
    c6: "check-out",
    c7: "Edition",
  };
  return (
    <>
      <DataTable
        nameColumns={namesOfColumns}
        setAddModal={setAddModal}
        addModal={addModal}
      />
    </>
  );
}
