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

export default function Home() {
  return (
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
  );
}
