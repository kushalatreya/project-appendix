import React from "react";
import { Link } from "react-router-dom";

export default function RentalCard(props) {
  const rentalDetails = props.rentalDetails;
  return (
    <div className="col-md-3 col-xs-6">
      <Link to={`/rentals/${rentalDetails.id}`}>
        <div className="card bwm-card">
          <img className="card-img-top" src={rentalDetails.image} alt=""></img>
          <div className="card-block">
            <h6 className="card-subtitle">
              {rentalDetails.shared ? "shared" : "whole"}{" "}
              {rentalDetails.category} &#183; {rentalDetails.city}
            </h6>
            <h4 className="card-title">{rentalDetails.title}</h4>
            <p className="card-text">
              Rs: {rentalDetails.dailyRate} per day &#183; Free Cancelation
            </p>
            {/* <a href="# " className="card-link">
              More Info
            </a> */}
          </div>
        </div>
      </Link>
    </div>
  );
}
