import React, { useState } from "react";
import "./dashBoardAdmin.scss";

//import dashboard Sections
import Customer from "../../components/componentsAdmin/customers/customer.jsx";
import Bookings from "../../components/componentsAdmin/panel/bookings.jsx";
import DashBoard from "../../components/componentsAdmin/panel/dashboard.jsx";
import Header from "../../components/componentsAdmin/panel/header.jsx";
import Property from "../../components/componentsAdmin/panel/property.jsx";
import Settings from "../../components/componentsAdmin/panel/settigs.jsx";
import SideBar from "../../components/componentsAdmin/sideBar/sideBar.jsx";

export default function DashBoardAdmin() {
  const [selectedElement, setSelectedElement] = useState("dashboard");
  const [dataUsers, setDataUsers] = useState([]);
  const [addModal, setAddModal] = useState(false);

  const renderSelectedElement = () => {
    switch (selectedElement) {
      case "dashboard":
        return <DashBoard dataUsers={dataUsers} setDataUsers={setDataUsers} />;
      case "bookings":
        return <Bookings />;
      case "settings":
        return <Settings />;
      case "property":
        return <Property />;
      case "customer":
        return <Customer setAddModal={setAddModal} addModal={addModal} />;
      default:
        return null;
    }
  };

  return (
    <div className={`dashBoardPanel ${addModal ? "modalOpened" : ""}`}>
      <SideBar setSelectedElement={setSelectedElement} />
      <div className="panel">
        <Header />
        <div className="elementsEachComponent">{renderSelectedElement()}</div>
      </div>
      {addModal && <div className="backgroundOverlay" />}
    </div>
  );
}
