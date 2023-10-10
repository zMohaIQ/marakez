"use client";
import { useState } from "react";
import "./Navbar.scss";
import Image from "next/image";
import Button from "./Button";

import logo from "../assests/imgs/Marakez-removebg-preview.png";
import sidebarMenu from "../assests/icons/bars-solid.svg";
import exitMenu from "../assests/icons/x-solid.svg";
import linkedinLogo from "../assests/icons/linkedin.svg";
import facebookLogo from "../assests/icons/facebook.svg";
import instagramLogo from "../assests/icons/instagram.svg";
import youtubeLogo from "../assests/icons/youtube.svg";

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
        {isSidebarOpen ? <li className="special">Careers</li> : ""}
        {isSidebarOpen ? <li className="special">About us</li> : ""}
        {isSidebarOpen ? <li className="special">Contact us</li> : ""}
      </ul>
      {isSidebarOpen ? (
        <div className="contactUsLogo">
          <Image src={linkedinLogo} alt="linkedin" width={32} />
          <Image src={facebookLogo} alt="facebook" width={32} />
          <Image src={instagramLogo} alt="instagram" width={32} />
          <Image src={youtubeLogo} alt="youtube" width={32} />
        </div>
      ) : (
        ""
      )}
      <div className="mobile">
        <Image src="https://marakez.net/img/marakezLogo.svg" alt="logo" className="logo" width={200} height={80} />
        <Image
          src={isSidebarOpen ? exitMenu : sidebarMenu} // Conditionally render the icon
          alt="sidebar"
          width={28}
          className="sidebar"
          onClick={toggleSidebar}
        />
      </div>
      <div className={`buttons ${isSidebarOpen ? "openButton" : ""}`}>
        <Button>Start Video Call</Button>
        <Button>Choose Your Unit</Button>
      </div>
    </main>
  );
}
