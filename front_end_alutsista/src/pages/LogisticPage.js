import React from "react";
import Navbar from "../components/Navbar";
import Logistics from "../components/Logistics";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";

function LogisticPage() {
  const logHeading = () => {
    return "Our Content";
  };
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Logistics logHeading={logHeading} />
      <Footer />
    </>
  );
}

export default LogisticPage;
