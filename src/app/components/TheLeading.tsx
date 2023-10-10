/* eslint-disable @next/next/no-img-element */
import "./TheLeading.scss";

import { leadingData } from "../constants/theLeading.constant";

const TheLeading = () => {
  return (
    <main className="leading">
      <h2 className="header">
        <span>THE LEADING MIXED-USE DEVELOPER IN EGYPT</span>
      </h2>
      <div className="box__holder">
        {leadingData.map((card, index) => (
          <div className={`box ${card.class}`} key={index}>
            <img src={card.img} alt={card.imgAlt} />
            <div className="content">
              <h2>{card.header}</h2>
              <a href="#">Know More</a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default TheLeading;
