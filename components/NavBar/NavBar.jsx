"use client";
import Image from "next/image";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "../SideBar/SideBar";
const NavBar = () => {
  const [showNavModal, setShowNavModal] = useState(false);

  const navlinks = [
    "Home",
    "Services",
    "Freelancers",
    "Skills",
    "How It Works",
    "Blog",
    "Contact",
  ];

  function NavLinks({ isModalView = false }) {
    return (
      <div
        className={`items-center justify-between w-full md:flex md:w-auto ${
          isModalView ? "" : "hidden"
        }`}
        id="nav-items"
      >
        <ul className="nav-links">
          {navlinks.map((item) => (
            <li className="li" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  function NavButtons() {
    return (
      <div className="  gap-x-2 font-semibold text-lg justify-center items-center hidden lg:flex">
        <div>
          <button className="px-7 py-2 bg-black text-white">Login</button>
        </div>
        <div>
          <button className="px-6 py-3">Sign Up</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <nav className="nav">
        <div className="max-w-screen-2xl p-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="text-4xl font-bold drop-shadow-xl">Synexus</div>

          <NavLinks />
          <NavButtons />
          <div className="lg:hidden">
            <MenuIcon
              onClick={() => {
                setShowNavModal(!showNavModal);
              }}
            />
          </div>
        </div>
      </nav>
      <SideBar
        show={showNavModal}
        setShow={setShowNavModal}
        mainContentOne={<NavLinks isModalView={true} />}
      />
    </>
  );
};

export default NavBar;
