import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { BsCart2 } from "react-icons/bs";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { PiHeartThin } from "react-icons/pi";

import "./nav.css";
<CiSearch />;
function NavBar() {
  return (
    <>
      <div className="container mx-4 px-5 d-flex flex-row justify-content-between align-items-center">
        <div className="logo d-flex align-items-center">
          <p className="m-0">
            SHOP <span>LITE</span>
          </p>
        </div>
        <nav className="links d-flex">
          <a href="#" className="text-decoration-none">
            HOME
          </a>
          <a href="#" className="text-decoration-none">
            ABOUT
          </a>
          <a href="#" className="text-decoration-none">
            SHOP
          </a>
          <a href="#" className="text-decoration-none">
            BLOGS
          </a>
          <a href="#" className="text-decoration-none">
            PAGES
          </a>
          <a href="#" className="text-decoration-none">
            CONTACT
          </a>
        </nav>
        <nav className="icon-links d-flex">
          <a href="">
            <CiSearch size="1.5rem" color="black" />
          </a>
          <a href="">
            <CiUser size="1.5rem" color="black" />
          </a>
          <a href="">
            <PiHeartThin size="1.5rem" color="black" />
          </a>
          <a href="">
            <PiShoppingCartSimpleThin size="1.5rem" color="black" />
          </a>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
