import React from "react";
// import "./ServiceCard.css";
// import { bounce } from "react-animations";
// import Radium, { StyleRoot } from "radium";
import { AnimationWrapper } from "react-hover-animation";

// const styles = {
//   bounce: {
//     animation: "x 1s",
//     animationName: Radium.keyframes(bounce, "bounce"),
//   },
// };

const ServiceCard = (props) => {
  const { type, description, price, icon } = props.service;
  return (
    <div className="col-md-4">
      <div className="p-4 m-3 shadow rounded">
        <AnimationWrapper>
          {/* <StyleRoot> */}
            <img
              className="img-fluid w-25 test"
              // style={styles.bounce}
              src={icon}
              alt=""
            />
          {/* </StyleRoot> */}
        </AnimationWrapper>

        <h3>{type}</h3>
        <p>{description}</p>
        <p>${price}</p>
        <button className="btn btn-primary">GET SERVICE</button>
      </div>
    </div>
  );
};

export default ServiceCard;
