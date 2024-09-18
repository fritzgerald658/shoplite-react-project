import React from "react";
import TopInfo from "./TopInfo/TopInfo";
import Navbar from "../../components/nav/Navbar.jsx";

function Home() {
  return (
    <>
      <div className="container-fluid justify-content-center m-0 row">
        <TopInfo />
        <Navbar />
      </div>
    </>
  );
}

export default Home;
