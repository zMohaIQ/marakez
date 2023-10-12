/* eslint-disable @next/next/no-img-element */
"use client";

import Slider from "react-slick";
import React, { useEffect } from "react";
import "./DevelopmentSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TheLeading.scss";

import { useInView } from "react-intersection-observer";

import { leadingData } from "../constants/theLeading.constant";

function Arrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: "block", background: "transparent" }} onClick={onClick} />
  );
}

const TheLeading = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow className={undefined} style={undefined} onClick={undefined} />,
    prevArrow: <Arrow className={undefined} style={undefined} onClick={undefined} />,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const [ref, inView] = useInView({
    triggerOnce: false, // Set to true if you only want the animation to trigger once
  });

  useEffect(() => {
    if (inView) {
      const leadingElement = document.querySelector(".leading");
      leadingElement?.classList.add("animate__animated", "animate__fadeIn");
    } else {
      const leadingElement = document.querySelector(".leading");
      leadingElement?.classList.remove("animate__animated", "animate__fadeIn");
    }
  }, [inView]);

  return (
    <main className="leading" ref={ref}>
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
      <Slider {...settings} className="box__slider">
        {leadingData.map((card, index) => (
          <div className={`box ${card.class}`} key={index}>
            <img src={card.img} alt={card.imgAlt} />
            <div className="content">
              <h2>{card.header}</h2>
              <a href="#">Know More</a>
            </div>
          </div>
        ))}
      </Slider>
    </main>
  );
};

export default TheLeading;
