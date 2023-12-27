import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";

function AboutPage() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <About />
      <Footer />
    </>
  );
}

export default AboutPage;
