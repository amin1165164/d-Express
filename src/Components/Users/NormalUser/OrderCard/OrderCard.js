import React from "react";

const OrderCard = (props) => {
  const { type, details, Address } = props.userOrder;
  return (
    <div className="col-md-5 shadow rounded rounded-2 m-2 p-3">
        <p className="text-center"> Pending</p>
      <div>
        <p>{type}</p>
        <p>{details}</p>
        <p>{Address}</p>
      </div>
    </div>
  );
};

export default OrderCard;
