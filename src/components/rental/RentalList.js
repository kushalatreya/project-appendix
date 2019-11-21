import React, { Component } from "react";
import RentalCard from "./RentalCard";

export default class RentalList extends Component {
  /* constructor() {
    super();
    this.state = {
      rentals: [1, 2, 3]
    };
  } */
  state = {
    rentals: [1, 2, 3]
  };
  //   addRental = this.addRental.bind(this);

  renderRentals() {
    return this.state.rentals.map(rental => {
      return <RentalCard />;
    });
  }
  addRental() {
    const rentals = this.state.rentals;
    rentals.push(1);

    this.setState({
      //   rentals: rentals
      rentals
    });
  }
  render() {
    return (
      <div className="container">
        <section id="rentalListing">
          <h1 className="page-title">Let's meet your new home</h1>
          <div className="row">{this.renderRentals()}</div>
          <button onClick={() => this.addRental()}>Add Rental</button>
        </section>
      </div>
    );
  }
}
