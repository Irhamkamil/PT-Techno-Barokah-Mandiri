import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Logistics from "../components/Logistics";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";

function HomePage() {
  const logHeading = () => {
    return "Our Content";
  };
  return (
    <>
      <Navbar />
      <Jumbotron />
      <About />
      <Logistics logHeading={logHeading} />
      <Footer />
    </>
  );
}

export default HomePage;
