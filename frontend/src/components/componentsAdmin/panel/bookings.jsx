import React from "react";
import DataTable from "./fetchDataToTable/fetchDataToTable.jsx";
import { useBookingContext } from "../../../context/bookingsContext.jsx";

export default function Bookings({ setAddModal, addModal }) {
  const { bookingsData } = useBookingContext();
  console.log(bookingsData);
  const namesOfColumns = {
    c1: "ID",
    c2: "First Name",
    c3: "Last Name",
    c4: "Email",
    c5: "Edition",
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
