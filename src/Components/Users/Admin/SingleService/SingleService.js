import React from "react";
import { useHistory } from "react-router";

const SingleService = (props) => {
  const { _id, type, price } = props.sService;
  const history = useHistory();

  const handleRemove = () => {
    fetch(`https://intense-bayou-17126.herokuapp.com/removeService/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Do you want remove this book?");
        history.replace("/");
      });
  };
  return (
    <tr>
      <td>{type}</td>
      <td>{price}</td>
      <td>
        <button onClick={handleRemove} className="btn btn-danger">
          Remove
        </button>
      </td>
    </tr>
  );
};

export default SingleService;
