import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Hero.css";
import goPro from "../../../assets/hero/go-pro.png";
import bgCircle from "../../../assets/hero/bg-circle.png";
function Hero() {
  return (
    <>
      <div className="row hero-container container   ">
        <div className="col-12 col-lg-6 d-flex justify-content-center flex-column align-items-center">
          <div>
            <h1>GOPRO HERO9 BLACK</h1>
            <p>Limited stocks available. Grab it now!</p>
            <button>SHOP COLLECTION</button>
          </div>
        </div>
        <div className="col-12 col-lg-6 position-relative d-flex justify-content-center align-items-center hero-image-container">
          <img className="hero-image" src={goPro} alt="" />
          <img className="hero-image-bg" src={bgCircle} alt="" />
        </div>
      </div>
    </>
  );
}

export default Hero;
