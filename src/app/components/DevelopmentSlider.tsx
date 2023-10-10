/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Slider from "react-slick";
import { sliderData } from "../constants/slider.constant";
import "./DevelopmentSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Arrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: "block", background: "transparent" }} onClick={onClick} />
  );
}

const DevelopmentSlider: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <Arrow className={undefined} style={undefined} onClick={undefined} />,
    prevArrow: <Arrow className={undefined} style={undefined} onClick={undefined} />,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <>
      <main className="development">
        <h2 className="header">
          <span>OUR DEVELOPMENTS</span>
        </h2>
        <Slider {...settings}>
          {sliderData.map((card, index) => (
            <div className="card" key={index}>
              <img src={card.imgSrc} alt={card.altText} />
              <div className="imgText">
                <p>{card.imgPara}</p>
                <a href="#">Know More</a>
              </div>
              <div className="card__content">
                <h3>{card.header}</h3>
                <p>{card.para}</p>
              </div>
            </div>
          ))}
        </Slider>
      </main>
      <div className="line"></div>
    </>
  );
};

export default DevelopmentSlider;
