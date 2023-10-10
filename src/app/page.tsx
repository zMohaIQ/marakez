import Business from "./components/Business";
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
