import React, { useState } from "react";
import TableList from "./listElements/listElements";
import HeaderTable from "./listElements/headerTable";
import FooterTable from "./listElements/footerTable";
import Axios from "axios";
import "./panel.scss";

const Property = ({ dataUsers, setDeleteData, onUserUpdate }) => {
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

  const handleEdit = (dataUpdated) => {
    Axios.put(`/users/testing/${dataUpdated._id}`, {
      firstName: dataUpdated.firstName,
      lastName: dataUpdated.lastName,
      email: dataUpdated.email
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log("You got an error editing data (handleEdit): ", err);
      });
    onUserUpdate(dataUpdated);
  };

  const handleDelete = (userId) => {
    Axios.delete(`/users/testing/${userId}`)
      .then((response) => {
        console.log(response.data);
        setDeleteData((prevDeleteData) => ({ ...prevDeleteData, userId }));
      })
      .catch((err) => {
        console.error(
          "Something is wring with the server to delete with error : ",
          err
        );
      });
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
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Edition</th>
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
                handleEdit({ ...user, ...dataUpdated });
              }}
              handleDelete={() => {
                handleDelete(user._id);
              }}
            />
          ))}
        </tbody>
      </table>
      <FooterTable
        totalElements={dataUsers.length}
        maxPage={Math.floor(dataUsers.length / elementsPerPage)}
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
};

export default Property;
