import React from "react";

const BookingList = (props) => {
  const { name, email, Address, number, type, details, price } = props.booking;
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{type}</td>
      <td>{price}</td>
      <td>{details}</td>
      <td>{Address}</td>
      <td>{number}</td>
      <td>Credit Card</td>
      <td>
        <button type="submit" className="btn btn-warning">
          Pending
        </button>
        <button type="submit" className="btn btn-info my-1">
          On Going
        </button>
        <button type="submit" className="btn btn-success">
          Done
        </button>
      </td>
    </tr>
  );
};

export default BookingList;
