import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import busIcon from "../../Images/deliverytruck.png"
import normalDelivery from "../../Images/normalDelivery.png"
import expressDelivery from "../../Images/expressDelivery.png"

const Services = () => {
  const serviceList = [
    {
      type: "Normal delivery",
      description: "Within 24 hours product will be delivered",
      price: "80",
      icon: normalDelivery
    },
    {
      type: "Express delivery",
      description: "Within 4 hours product will be delivered",
      price: "180",
      icon: expressDelivery
    },
    {
      type: "Courier delivery",
      description: "Within 48 hours product will be delivered",
      price: "120",
      icon: busIcon
    },
  ];
  return (
    <div className="text-center mt-5">
      <h1 className="my-4">Services we provide.</h1>
      <div className="row">
        {serviceList.map((service) => (
          <ServiceCard service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
