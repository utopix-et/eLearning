import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { WiMoonWaningCrescent1 } from "react-icons/wi";

const Cards = ({ img, levelIcon, Title }) => {
  if (!img) {
    return <h1>Image not found</h1>;
  }

  function Icon() {
    if (levelIcon === "Beginner") {
      return <GoPrimitiveDot className="text-success" />;
    } else {
      return <WiMoonWaningCrescent1 className="text-warning me-2" style = {{transform: 'rotate(90deg)' }} />;
    }
  }

  return (
    <>
      <div className="card">
        <img src={img} className="card-img-top" alt="frontend-foundation-img" />
        <div className="card-body">
          <h5 className="card-title">{Title}</h5>
          <div className="py-2">
            <Icon />
            <span>{levelIcon}</span>
          </div>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </>
  );
};

export default Cards;
