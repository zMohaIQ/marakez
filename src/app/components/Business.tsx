/* eslint-disable @next/next/no-img-element */
"use client";

import "./Business.scss";
import Button from "./Button";

import Slider from "react-slick";
import "./DevelopmentSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Arrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent" }}
      onClick={onClick}
    />
  );
}

const Business = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow className={undefined} style={undefined} onClick={undefined} />,
    prevArrow: <Arrow className={undefined} style={undefined} onClick={undefined} />,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <main className="business">
      <div className="special_header">
        <h1>
          <span className="special">1</span>
          st <span>IN THE BUSINESS TO DO</span>
        </h1>
      </div>
      <div className="img__holder">
        <img
          src="https://gazef.s3.amazonaws.com/mrakez_micro_services/media/business_todo/a9abcde6-fdc5-4ad3-82a7-6fdd95c2a772.jpg"
          alt="img 1"
        />
        <img
          src="https://gazef.s3.amazonaws.com/mrakez_micro_services/media/business_todo/915b6a14-dcf3-4822-b1c5-aca1fcbd426a.jpg"
          alt="img 2"
        />
        <img
          src="https://gazef.s3.amazonaws.com/mrakez_micro_services/media/business_todo/b0d63ec3-a719-4825-8b5a-3058a8a0acf9.jpg"
          alt="img 3"
        />
      </div>

      <Slider {...settings} className="img__slider">
        <img
          src="https://gazef.s3.amazonaws.com/mrakez_micro_services/media/business_todo/a9abcde6-fdc5-4ad3-82a7-6fdd95c2a772.jpg"
          alt="img 1"
        />
        <img
          src="https://gazef.s3.amazonaws.com/mrakez_micro_services/media/business_todo/915b6a14-dcf3-4822-b1c5-aca1fcbd426a.jpg"
          alt="img 2"
        />
        <img
          src="https://gazef.s3.amazonaws.com/mrakez_micro_services/media/business_todo/b0d63ec3-a719-4825-8b5a-3058a8a0acf9.jpg"
          alt="img 3"
        />
      </Slider>

      <div className="content__holder">
        <div className="content">
          <h3>LATEST LAUNCHES</h3>
          <p>
            Marakez builds with purpose. Every project we create comes to life through meticulous
            attention to detail for our clients needs. Here are our latest responses to the markets
            demands.
          </p>
          <Button>
            View all <br /> Properties
          </Button>
        </div>

        <div className="imgs">
          <div className="box">
            <img
              src="https://gazef.s3.amazonaws.com/mrakez_micro_services/media/developments/ce07a250-c991-47b8-a281-9ddfd490fe8d.jpg"
              alt="img 1"
            />
            <div className="content">
              <p>District 5 Work</p>
              <h3>Campus</h3>
              <p>
                DISTRICT 5 CAMPUS offers an array of area ranges opens a world of opportunities to
                choose from, with high-efficiency rates and office spaces that start from 160 sqm up
                to 690 sqm, ready for delivery within a year and a half.
              </p>
            </div>
          </div>
          <div className="box">
            <img
              src="https://gazef.s3.amazonaws.com/mrakez_micro_services/media/developments/b866d594-7395-439a-b37b-781b93d060d1.jpg"
              alt="img 2"
            />
            <div className="content">
              <p>District 5 Residences</p>
              <h3>Plateau</h3>
              <p>
                The Plateau is our highest vantage point. The redefinition of elevated living. We
                sketched it to offer endless views bound to take your breath away.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Slider {...settings} className="img__slider mt-4">
        <div className="box">
          <img
            src="https://gazef.s3.amazonaws.com/mrakez_micro_services/media/developments/ce07a250-c991-47b8-a281-9ddfd490fe8d.jpg"
            alt="img 1"
          />
          <div className="content">
            <p>District 5 Work</p>
            <h3>Campus</h3>
            <p>
              DISTRICT 5 CAMPUS offers an array of area ranges opens a world of opportunities to
              choose from, with high-efficiency rates and office spaces that start from 160 sqm up
              to 690 sqm, ready for delivery within a year and a half.
            </p>
          </div>
        </div>
        <div className="box">
          <img
            src="https://gazef.s3.amazonaws.com/mrakez_micro_services/media/developments/b866d594-7395-439a-b37b-781b93d060d1.jpg"
            alt="img 2"
          />
          <div className="content">
            <p>District 5 Residences</p>
            <h3>Plateau</h3>
            <p>
              The Plateau is our highest vantage point. The redefinition of elevated living. We
              sketched it to offer endless views bound to take your breath away.
            </p>
          </div>
        </div>
      </Slider>
    </main>
  );
};

export default Business;
