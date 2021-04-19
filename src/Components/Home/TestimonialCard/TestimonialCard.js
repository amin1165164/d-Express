import React from "react";

const TestimonialCard = (props) => {
  const { image, name, address, review } = props.testimonial;
  return (
    <div className="col-md-4">
      <div className="p-4 m-3 shadow rounded">
        <img className="img-fluid w-25" src={image} alt="" />
        <h3>{name}</h3>
        <p>{address}</p>
        <p>{review}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
