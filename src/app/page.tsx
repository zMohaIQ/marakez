"use client";

import React, { useEffect, useState } from "react";

import Business from "./components/Business";
import CallUs from "./components/CallUs";
import ContactUs from "./components/ContactUs";
import CopyRight from "./components/CopyRight";
import DevelopmentSlider from "./components/DevelopmentSlider";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import TheLeading from "./components/TheLeading";
import WhoWeAre from "./components/WhoWeAre";

import LoadingSpinner from "./components/LoadingSpinner";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading (you can replace this with actual loading logic)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000); // Set the delay time in milliseconds

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <CallUs />
          <ContactUs />
          <Navbar />
          <Landing />
          <DevelopmentSlider />
          <TheLeading />
          <WhoWeAre />
          <Business />
          <Footer />
          <CopyRight />
        </>
      )}
    </>
  );
}
