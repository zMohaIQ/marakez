"use client";

import Button from "./Button";
import "./Landing.scss";

import searchIcon from "../assests/icons/magnifying-glass-solid.svg";
import Image from "next/image";
import { searchListData } from "../constants/searchList.constant";
import { useState } from "react";

import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";

export default function Landing() {
  const [showSearchList, setShowSearchList] = useState(false);

  const [showBoxDestination, setShowBoxDestination] = useState(false);
  const [showType, setShowType] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const [showPrice, setShowPrice] = useState(false);

  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);

  const [fromValue, setFromValue] = useState(1000000);
  const [toValue, setToValue] = useState(10000000);

  const toggleSearchList = () => {
    setShowSearchList((prevState) => !prevState);
  };

  const handleBoxDestination = () => {
    setShowBoxDestination((prevState) => !prevState);
    setShowType(false);
    setShowProject(false);
    setShowPrice(false);
  };

  const handleBoxType = () => {
    setShowType((prevState) => !prevState);
    setShowBoxDestination(false);
    setShowProject(false);
    setShowPrice(false);
  };

  const handleBoxProject = () => {
    setShowProject((prevState) => !prevState);
    setShowBoxDestination(false);
    setShowType(false);
    setShowPrice(false);
  };

  const handleBoxPrice = () => {
    setShowPrice((prevState) => !prevState);
    setShowBoxDestination(false);
    setShowType(false);
    setShowProject(false);
  };

  const handleFromSliderChange = (e: any) => {
    const value = parseInt(e.target.value);
    setFromValue(value);
    if (value > toValue) {
      setToValue(value);
    }
  };

  const handleToSliderChange = (e: any) => {
    const value = parseInt(e.target.value);
    setToValue(value);
    if (value < fromValue) {
      setFromValue(value);
    }
  };

  const handleCheckboxChange = (category: any, label: any) => {
    switch (category) {
      case "Destination":
        setSelectedDestinations((prev: any) =>
          prev.includes(label) ? prev.filter((item: any) => item !== label) : [...prev, label]
        );
        break;
      case "Type":
        setSelectedTypes((prev: any) =>
          prev.includes(label) ? prev.filter((item: any) => item !== label) : [...prev, label]
        );
        break;
      case "Project":
        setSelectedProjects((prev: any) =>
          prev.includes(label) ? prev.filter((item: any) => item !== label) : [...prev, label]
        );
        break;
      default:
        break;
    }
  };

  const formatSelectedItems = (items: any) => {
    return items.length ? items.join(" / ") : "Any";
  };

  const [ref, inView] = useInView({
    triggerOnce: false, // Set to true if you only want the animation to trigger once
  });

  useEffect(() => {
    if (inView) {
      const boxHolderElement = document.querySelector(".box__holder");
      boxHolderElement?.classList.add("animate__animated", "animate__fadeIn");
    } else {
      const boxHolderElement = document.querySelector(".box__holder");
      boxHolderElement?.classList.remove("animate__animated", "animate__fadeIn");
    }
  }, [inView]);

  return (
    <main className="landing" ref={ref}>
      <video src="/Marakez-2022.mp4" autoPlay loop muted />

      <div className="box__holder">
        <div className="box__left">
          <div className="box" onClick={handleBoxDestination}>
            <h1>Destination</h1>
            <p>{formatSelectedItems(selectedDestinations)}</p>
          </div>
          <div className="box" onClick={handleBoxType}>
            <h1>Type of unit</h1>
            <p>{formatSelectedItems(selectedTypes)}</p>
          </div>
          <div className="box" onClick={handleBoxProject}>
            <h1>Projects</h1>
            <p>{formatSelectedItems(selectedProjects)}</p>
          </div>
          <div className="box" onClick={handleBoxPrice}>
            <h1>Price Range</h1>
            <p>
              {fromValue} to {toValue}
            </p>
          </div>
          <div className="box">
            <Button>
              <Image src={searchIcon} alt="searchIcon" width={24} /> Search Properties
            </Button>
          </div>
        </div>

        {showBoxDestination && (
          <div className="box__right">
            <ul>
              {searchListData[0].items.map((item) => (
                <li key={item.id}>
                  <input
                    type="checkbox"
                    id={item.id}
                    name={item.name}
                    checked={selectedDestinations.includes(item.label)}
                    onChange={() => handleCheckboxChange("Destination", item.label)}
                  />
                  <label htmlFor={item.id}>{item.label}</label>
                </li>
              ))}
            </ul>
          </div>
        )}

        {showType && (
          <div className="box__right">
            <ul>
              {searchListData[1].items.map((item) => (
                <li key={item.id}>
                  <input
                    type="checkbox"
                    id={item.id}
                    name={item.name}
                    checked={selectedTypes.includes(item.label)}
                    onChange={() => handleCheckboxChange("Type", item.label)}
                  />
                  <label htmlFor={item.id}>{item.label}</label>
                </li>
              ))}
            </ul>
          </div>
        )}

        {showProject && (
          <div className="box__right">
            <ul>
              {searchListData[2].items.map((item) => (
                <li key={item.id}>
                  <input
                    type="checkbox"
                    id={item.id}
                    name={item.name}
                    checked={selectedProjects.includes(item.label)}
                    onChange={() => handleCheckboxChange("Project", item.label)}
                  />
                  <label htmlFor={item.id}>{item.label}</label>
                </li>
              ))}
            </ul>
          </div>
        )}

        {showPrice && (
          <div className="box__right">
            <div className="range_container">
              <div className="sliders_control">
                <input
                  id="fromSlider"
                  type="range"
                  min="1000000"
                  max="100000000"
                  step="10000"
                  value={fromValue}
                  onChange={handleFromSliderChange}
                />
                <input
                  id="toSlider"
                  type="range"
                  min="1000000"
                  max="100000000"
                  step="10000"
                  value={toValue}
                  onChange={handleToSliderChange}
                />
              </div>
              <div className="price">
                <div className="box">
                  <input
                    type="text"
                    placeholder={fromValue.toString()}
                    onChange={(e) => setFromValue(Number(e.target.value))}
                    value={fromValue.toString()}
                  />
                  <span>EGP</span>
                </div>
                <div className="box">
                  <input
                    type="text"
                    placeholder={toValue.toString()}
                    onChange={(e) => setToValue(Number(e.target.value))}
                    value={toValue.toString()}
                  />
                  <span>EGP</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="search" onClick={toggleSearchList}>
        <Button>
          <Image src={searchIcon} alt="searchIcon" width={24} /> Search Properties
        </Button>
      </div>

      {showSearchList && <div className="overlay" onClick={toggleSearchList}></div>}

      {showSearchList && (
        <div className="search-list">
          {searchListData.map((data, index) => (
            <div className="list" key={index}>
              <h3>{data.title}</h3>
              <ul>
                {data.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <input type="checkbox" id={item.id} name={item.name} />
                    <label htmlFor={item.id}>{item.label}</label>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="type">
            <div className="range_container">
              <div className="sliders_control">
                <input
                  id="fromSlider"
                  type="range"
                  min="1000000"
                  max="100000000"
                  step="10000"
                  value={fromValue}
                  onChange={handleFromSliderChange}
                />
                <input
                  id="toSlider"
                  type="range"
                  min="1000000"
                  max="100000000"
                  step="10000"
                  value={toValue}
                  onChange={handleToSliderChange}
                />
              </div>
              <div className="price">
                <div className="box">
                  <input
                    type="text"
                    placeholder={fromValue.toString()}
                    onChange={(e) => setFromValue(Number(e.target.value))}
                    value={fromValue.toString()}
                  />
                  <span>EGP</span>
                </div>
                <div className="box">
                  <input
                    type="text"
                    placeholder={toValue.toString()}
                    onChange={(e) => setToValue(Number(e.target.value))}
                    value={toValue.toString()}
                  />
                  <span>EGP</span>
                </div>
              </div>
            </div>
          </div>

          <div className="button">
            <Button>
              <Image src={searchIcon} alt="searchIcon" width={24} /> Search Properties
            </Button>
          </div>
        </div>
      )}
    </main>
  );
}
