import React from "react";
import TopInfo from "./TopInfo/TopInfo";
import Navbar from "../../components/nav/Navbar.jsx";
import "../home/Home.css";
import Hero from "./hero/Hero.jsx";
function Home() {
  return (
    <>
      <div className="container-fluid justify-content-center m-0 row header-container">
        <TopInfo />
        <Navbar />
      </div>
      <div className="container-fluid hero-section">
        <Hero />
      </div>
    </>
  );
}

export default Home;
