import React from "react";
import DataTable from "../panel/fetchDataToTable/fetchDataToTable.jsx";

const Customer = ({ setAddModal, addModal }) => {
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
};

export default Customer;
