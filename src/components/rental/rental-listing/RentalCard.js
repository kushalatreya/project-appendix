import React from "react";
import { Link } from "react-router-dom";
import { rentalType } from "../../../../src/helpers/index";

export default function RentalCard(props) {
  const rental = props.rental;
  return (
    <div className="col-md-3 col-xs-6">
      <Link className="rental-detail-link" to={`/rentals/${rental._id}`}>
        <div className="card bwm-card">
          <img
            className="card-img-top"
            src={rental.image}
            alt={rental.title}
          ></img>
          <div className="card-block">
            <h6 className={`card-subtitle ${rental.category}`}>
              {rentalType(rental.shared)} {rental.category} &#183; {rental.city}
            </h6>
            <h4 className="card-title">{rental.title}</h4>
            <p className="card-text">
              Rs: {rental.dailyRate} per day &#183; Free Cancelation
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
