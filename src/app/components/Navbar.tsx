"use client";
import { useState } from "react";
import "./Navbar.scss";
import Image from "next/image";

import logo from "../assests/imgs/Marakez-removebg-preview.png";
import sidebarMenu from "../assests/icons/bars-solid.svg";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <main className={`navbar ${isSidebarOpen ? "with-sidebar" : ""}`}>
      <ul className={`list ${isSidebarOpen ? "open" : ""}`}>
        <li>Retail</li>
        <li>Residential</li>
        <li>Offices</li>
        <li>What We Do</li>
        <li>Latest Updates</li>
      </ul>
      <Image src={logo} alt="logo" className="logo" />
      <Image
        src={sidebarMenu}
        alt="sidebar"
        width={32}
        className="sidebar"
        onClick={toggleSidebar}
      />
      <div className="buttons">
        <button>Start Video Call</button>
        <button>Choose Your Unit</button>
      </div>
    </main>
  );
}
