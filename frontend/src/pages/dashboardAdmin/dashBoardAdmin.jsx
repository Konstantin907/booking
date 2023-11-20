import React, { useState } from "react";
import Axios from "axios";
import "./dashBoardAdmin.scss";

//import dashboard Sections
import DashBoard from "../../components/componentsAdmin/panel/dashboard.jsx";
import Orders from "../../components/componentsAdmin/panel/orders.jsx";
import Header from "../../components/componentsAdmin/panel/header.jsx";
import Property from "../../components/componentsAdmin/panel/property.jsx";
import Settings from "../../components/componentsAdmin/panel/settigs.jsx";
import Customer from "../../components/componentsAdmin/customers/customer.jsx";
import SideBar from "../../components/componentsAdmin/sideBar/sideBar.jsx";

export default function DashBoardAdmin() {
  const [selectedElement, setSelectedElement] = useState("dashboard");
  const [dataUsers, setDataUsers] = useState([]);
  const [deleteData, setDeleteData] = useState({});

  const onUserUpdate = (updatedData) => {
    setDataUsers((prev) => {
      const users = [...prev];

      const foundUserIndex = users.findIndex(
        (user) => user._id === updatedData._id
      );

      if (foundUserIndex === -1) {
        throw new Error(
          `Hey something went wrong, the id${updatedData._id} is not found`
        );
      }

      users.splice(foundUserIndex, 1, updatedData);

      return users;
    });
  };

  const renderSelectedElement = () => {
    switch (selectedElement) {
      case "dashboard":
        return <DashBoard dataUsers={dataUsers} setDataUsers={setDataUsers} />;
      case "order":
        return <Orders />;
      case "settings":
        return <Settings />;
      case "property":
        return (
          <Property
            dataUsers={dataUsers}
            setDeleteData={setDeleteData}
            deleteData={deleteData}
            onUserUpdate={onUserUpdate}
          />
        );
      case "customer":
        return <Customer dataUsers={dataUsers} setDataUsers={setDataUsers} />;
      default:
        return null;
    }
  };

  return (
    <div className="dashBoardPanel">
      <SideBar setSelectedElement={setSelectedElement} />
      <div className="panel">
        <Header />
        <div className="elementsEachComponent">{renderSelectedElement()}</div>
        {console.log(dataUsers)}
      </div>
    </div>
  );
}
