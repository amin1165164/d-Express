import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [serviceInfo, setServiceInfo] = useState([]);


  useEffect(() => {
    fetch("https://intense-bayou-17126.herokuapp.com/services")
      .then((response) => response.json())
      .then((data) => setServiceInfo(data));
  }, []);
  return (
    <div className="text-center mt-5" id="service">
      <h1 className="my-4">Services we provide.</h1>
      <div className="row">
        {serviceInfo.map((service) => (
          <ServiceCard service={service} key={service._id}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
