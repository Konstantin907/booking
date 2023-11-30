import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import Property from "../../components/properties/Property";
import Popular from "../../components/popular/Popular";
import Mailbox from "../../components/mailbox/Mailbox";
import Footer from "../../components/footer/Footer";

import { useState } from "react";

//import map :
import Maps from "../../components/mapComponent/map";
const Home = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="homePageGeneral">
      <Navbar />
      {showMap ? (
        <>
          <Maps />
          <button className="showMapBtn" onClick={() => setShowMap(false)}>
            Show List<span>&#x2630;</span>
          </button>
        </>
      ) : (
        <>
          <Header />
          <div className="homeContainer">
            <Featured />
            <h1 className="homeTitle">Search by property type</h1>
            <Property />
            <h1 className="homeTitle">Most popular</h1>
            <Popular />
          </div>
          <Mailbox />
          <Footer />
          <button className="showMapBtn" onClick={() => setShowMap(true)}>
            Show Map <span>&#x1F5FA;</span>
          </button>
        </>
      )}
    </div>
  );
};

export default Home;
