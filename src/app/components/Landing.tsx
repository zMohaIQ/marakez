import Button from "./Button";
import "./Landing.scss";

import searchIcon from "../assests/icons/magnifying-glass-solid.svg";
import Image from "next/image";

export default function Landing() {
  return (
    <main className="landing">
      <video src="/Marakez-2022.mp4" autoPlay loop muted />
      <div className="content">
        <div className="content__holder">
          <h1>Destination</h1>
          <p>Any</p>
        </div>
        <div className="content__holder">
          <h1>Type of unit</h1>
          <p>Any</p>
        </div>
        <div className="content__holder">
          <h1>Projects</h1>
          <p>Any</p>
        </div>
        <div className="content__holder">
          <h1>Price Range</h1>
          <p>1000000 to 100000000</p>
        </div>
        <div className="content__holder">
          <Button>
            <Image src={searchIcon} alt="searchIcon" width={24} /> Search Properties
          </Button>
        </div>
      </div>
    </main>
  );
}
