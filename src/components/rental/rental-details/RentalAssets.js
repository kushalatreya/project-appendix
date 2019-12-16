import React from "react";

export default function RentalAssets() {
  return (
    <div>
      <div className="rental-assets">
        <h3 className="title">Assets</h3>
        <div className="row">
          <div className="col-md-6">
            <span>
              <i className="fa fa-coffee"></i> Balcony
            </span>
            <span>
              <i className="fa fa-thermometer"></i> Heating
            </span>
            <span>
              <i className="fa fa-cube"></i> Washing Machine
            </span>
          </div>
          <div className="col-md-6">
            <span>
              <i className="fa fa-car"></i> Parking
            </span>
            <span>
              <i className="fa fa-futbol-o"></i> Playing Area
            </span>

            <span>
              <i className="fa fa-paw"></i> Pets Allowed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
