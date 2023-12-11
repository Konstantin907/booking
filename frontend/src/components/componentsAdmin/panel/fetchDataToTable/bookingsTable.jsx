import React, { useState } from "react";
import { useBookingContext } from "../../../../context/bookingsContext";
import FooterTable from "../listElements/footerTable.jsx";
import HeaderTableNoAdd from "../listElements/headerTableNoAdd.jsx";
import TableList from "../listElements/listElementsBookings.jsx";
import "./fetchDataToTable.scss";

//testing Hook  :

const TableData = ({ nameColumns }) => {
  const { bookingsData, deleteBooking, updateBooking } = useBookingContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage] = useState(5);
  const [searchFilter, setSearchFilter] = useState("");

  //filter the data by seacrh but All the data no just the data showed up in that moment
  const filteredCustomers = bookingsData.filter((user) =>
    user._id.toLowerCase().includes(searchFilter.toLowerCase())
  );
  const initialValue = (currentPage - 1) * elementsPerPage;
  const lastValue = initialValue + elementsPerPage;
  const visibleData = filteredCustomers.slice(initialValue, lastValue); //this give to me part of my array with this values (index from start(0,1,2..stc),until index (5,6,7..etc))
  const viewLastValue = initialValue + visibleData.length;

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <div className="propertyTableContainer">
        <HeaderTableNoAdd
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <table>
          <thead>
            <tr>
              <th>{nameColumns.c1}</th>
              <th>{nameColumns.c2}</th>
              <th>{nameColumns.c3}</th>
              <th>{nameColumns.c4}</th>
              <th>{nameColumns.c5}</th>
              <th>{nameColumns.c6}</th>
              <th>{nameColumns.c7}</th>
            </tr>
          </thead>

          <tbody>
            {visibleData.map((user, index) => (
              <TableList
                key={index}
                idValue={user._id}
                userName={user.user ? user.user.firstName : " "}
                titleProperty={user.property ? user.property.title : " "}
                checkIn={user.checkInDate}
                checkOut={user.checkOutDate}
                className={index % 2 === 0 ? "evenRow" : ""}
                handleEdit={(dataUpdated) => {
                  updateBooking(dataUpdated);
                }}
                handleDelete={() => {
                  deleteBooking(user._id);
                }}
              />
            ))}
          </tbody>
        </table>
        <FooterTable
          totalElements={filteredCustomers.length}
          nextPage={nextPage}
          prevPage={prevPage}
          currentPageValue={currentPage}
          stopPage={Math.ceil(filteredCustomers.length / elementsPerPage)}
          initialValue={initialValue}
          lastValue={viewLastValue}
        />
      </div>
    </>
  );
};

export default TableData;
