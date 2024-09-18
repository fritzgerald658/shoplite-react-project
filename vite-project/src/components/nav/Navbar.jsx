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
      <div className="container d-flex flex-row justify-content-between align-items-center">
        <div className="logo">
          <p>
            SHOP<span>LITE</span>
          </p>
        </div>
        <div className="links">
          <nav className="d-flex justify-content-center align-items-center">
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
        </div>
        <div className="icon-links d-flex">
          <a href="#">
            <CiSearch color="black" size="1.5rem" />
          </a>
          <a href="#">
            <CiUser color="black" size="1.5rem" />
          </a>
          <a href="#">
            <PiHeartThin color="black" size="1.5rem" />
          </a>
          <a href="#">
            <PiShoppingCartSimpleThin color="black" size="1.5rem" />
          </a>
        </div>
      </div>
    </>
  );
}

export default NavBar;
