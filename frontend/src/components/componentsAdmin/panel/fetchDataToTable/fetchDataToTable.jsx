import React, { useState } from "react";
import TableList from "../listElements/listElements.jsx";
import HeaderTable from "../listElements/headerTable.jsx";
import FooterTable from "../listElements/footerTable.jsx";
import "./fetchDataToTable.scss";
import { useCustomerContext } from "../../../../context/customer-context.jsx";

import AddModal from "./addModal.jsx"; // Loading modal component

//testing Hook  :

const TableData = ({ nameColumns, setAddModal, addModal }) => {
  const { customers, updateCustomer, deleteCustomer } = useCustomerContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage] = useState(5);
  const [searchFilter, setSearchFilter] = useState("");

  //Modal animation  :
  const [animationModal, setAnimationModal] = useState(false);

  //filter the data by seacrh but All the data no just the data showed up in that moment
  const filteredCustomers = customers.filter((user) =>
    user.firstName.toLowerCase().includes(searchFilter.toLowerCase())
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
      {addModal && (
        <AddModal
          setAddModal={setAddModal}
          animationModal={animationModal}
          setAnimationModal={setAnimationModal}
        />
      )}
      <div className="propertyTableContainer">
        <HeaderTable
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          setAddModal={setAddModal}
          animationModal={animationModal}
          setAnimationModal={setAnimationModal}
        />
        <table>
          <thead>
            <tr>
              <th>{nameColumns.c1}</th>
              <th>{nameColumns.c2}</th>
              <th>{nameColumns.c3}</th>
              <th>{nameColumns.c4}</th>
              <th>{nameColumns.c5}</th>
            </tr>
          </thead>

          <tbody>
            {visibleData.map((user, index) => (
              <TableList
                key={index}
                idValue={user._id}
                firstName={user.firstName}
                lastName={user.lastName}
                email={user.email}
                username={user.username}
                className={index % 2 === 0 ? "evenRow" : ""}
                handleEdit={(dataUpdated) => {
                  updateCustomer(dataUpdated);
                }}
                handleDelete={() => {
                  deleteCustomer(user._id);
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
