import React from "react";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Offer from "../Offer/Offer";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Header />
      <Services />
      <Testimonial />
      <Offer />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
