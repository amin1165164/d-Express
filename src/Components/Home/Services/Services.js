import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [serviceInfo, setServiceInfo] = useState([]);


  useEffect(() => {
    fetch("http://localhost:5000/services")
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
