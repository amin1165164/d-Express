import React, { useState } from "react";

const BookingList = (props) => {
  const {_id, name, email, Address, number, type, details, price } = props.booking;
  const [status, setStatus] = useState({status: 'pending'});
  const handleChange = (e) => {
    // console.log(e.target.value);
    const newStatus = status;
    newStatus[e.target.name] = e.target.value;
    setStatus(newStatus);

  }
  console.log(status);
  

  const handleSubmit = (_id) =>{
    console.log(status);
    fetch(`https://intense-bayou-17126.herokuapp.com/status/${_id}`,{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(status)
    })
    .then(response => response.json())
    .then(data =>{
      console.log(data);
    })


  }
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
        <label>
          <select name="status" onChange={handleChange}>
            <option value="Pending">Pending</option>
            <option value="On going">On Going</option>
            <option value="Done">Done</option>
          </select>
        </label>
        <button type="submit" value="Submit" onClick={() =>handleSubmit(_id)} >
        Submit
        </button>
  
      </td>
    </tr>
  );
};

export default BookingList;
