import React, { useState } from "react";
import TableList from "./listElements/listElements";
import HeaderTable from "./listElements/headerTable";
import FooterTable from "./listElements/footerTable";
import "./panel.scss";

const Property = ({ dataUsers }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage] = useState(5);
  const [searchFilter, setSearchFilter] = useState("");

  //filter the data by seacrh but All the data no just the data showed up in that moment
  const filteredData = dataUsers.filter((user) =>
    user.firstName.toLowerCase().includes(searchFilter.toLowerCase())
  );
  const initialValue = (currentPage - 1) * elementsPerPage;
  const lastValue = initialValue + elementsPerPage;
  const visibleData = filteredData.slice(initialValue, lastValue); //this give to me part of my array with this values (index from start(0,1,2..stc),until index (5,6,7..etc))

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const handleEdit = (userId) => {
    console.log(`Edit user with ID ${userId}`);
  };

  const handleDelete = (userId) => {
    console.log(`Delete user with ID ${userId}`);
  };

  return (
    <div className="propertyTableContainer">
      <HeaderTable
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>email</th>
            <th>edition</th>
          </tr>
        </thead>

        <tbody>
          {visibleData.map((user, index) => (
            <TableList
              key={index}
              firstName={user.firstName}
              lastName={user.lastName}
              email={user.email}
              username={user.username}
              className={index % 2 === 0 ? "evenRow" : ""}
            />
          ))}
        </tbody>
      </table>
      <FooterTable
        totalElements={dataUsers.length}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
};

export default Property;
