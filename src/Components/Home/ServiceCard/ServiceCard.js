import React from "react";
import { AnimationWrapper } from "react-hover-animation";
import { Link } from "react-router-dom";

const ServiceCard = (props) => {
  // console.log(props.service);
  const { _id, type, description, price, image } = props.service;
  return (
    <div className="col-md-4">
      <div className="p-4 m-3 shadow rounded">
        <AnimationWrapper>
          <img className="img-fluid w-25 test" src={image} alt="" />
        </AnimationWrapper>

        <h3>{type}</h3>
        <p>{description}</p>
        <p>${price}</p>
        <Link to={`/bookService/${_id}`}>
          <button className="btn btn-primary">GET SERVICE</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
