import React, { useState } from "react";
import TableList from "../listElements/listElements.jsx";
import HeaderTable from "../listElements/headerTable.jsx";
import FooterTable from "../listElements/footerTable.jsx";
import Axios from "axios";
import "./fetchDataToTable.scss";

//testing Hook  :
import DataUpdatedHook from "../../../../hooks/updatedData.js";

const TableData = (props) => {
  const { loading, dataFetched, reFetchData, error } = DataUpdatedHook(
    props.urlHook
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage] = useState(5);
  const [searchFilter, setSearchFilter] = useState("");

  //filter the data by seacrh but All the data no just the data showed up in that moment
  const filteredData = dataFetched.filter((user) =>
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
    const urlEdition = `${props.urlHook}${dataUpdated._id}`;

    Axios.put(urlEdition, {
      firstName: dataUpdated.firstName,
      lastName: dataUpdated.lastName,
      email: dataUpdated.email,
    })
      .then((response) => {
        console.log(response.data);
        reFetchData();
      })
      .catch((err) => {
        console.log("You got an error editing data (handleEdit): ", err);
      });
  };

  const handleDelete = (userId) => {
    Axios.delete(`${props.urlHook}${userId}`)
      .then((response) => {
        console.log(response.data);
        reFetchData();
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
            <th>{props.nameColumns.id}</th>
            <th>{props.nameColumns.firstName}</th>
            <th>{props.nameColumns.lastName}</th>
            <th>{props.nameColumns.email}</th>
            <th>{props.nameColumns.edition}</th>
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
                handleEdit(dataUpdated);
              }}
              handleDelete={() => {
                handleDelete(user._id);
              }}
            />
          ))}
        </tbody>
      </table>
      <FooterTable
        totalElements={dataFetched.length}
        nextPage={nextPage}
        prevPage={prevPage}
        currentPageValue={currentPage}
        stopPage={Math.ceil(dataFetched.length / elementsPerPage)}
        initialValue={initialValue}
        lastValue={lastValue}
      />
    </div>
  );
};

export default TableData;
