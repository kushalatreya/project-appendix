import React, { Component } from "react";
import RentalCard from "./RentalCard";

export default class RentalList extends Component {
  state = {
    rentals: [
      {
        id: 1,
        title: "Basantapur Apartment",
        city: " Durbar Square",
        street: "Basantapur Darbar Kshetra",
        category: "apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 3,
        description: "Very nice apartment",
        dailyRate: 340,
        shared: false,
        createdAt: "24/12/2017"
      },
      {
        id: 2,
        title: "Sinamangal Apartment 2",
        city: "Baneshwor",
        street: "Sinamangal",
        category: "condo",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 2,
        description: "Very nice apartment",
        dailyRate: 120,
        shared: true,
        createdAt: "24/12/2017"
      },
      {
        id: 3,
        title: "Central Apartment 3",
        city: "Naikap",
        street: "Hanuman Road",
        category: "condo",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 2,
        description: "Very nice apartment",
        dailyRate: 334,
        shared: true,
        createdAt: "24/12/2017"
      },
      {
        id: 4,
        title: "Darbar Marg",
        city: "Naya Sadak",
        street: "Nachhen Galli, Kathmandu 44600, Nepal",
        category: "house",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 9,
        description: "Very nice apartment",
        dailyRate: 330,
        shared: true,
        createdAt: "24/12/2017"
      }
    ]
  };

  renderRentals() {
    return this.state.rentals.map((rental, index) => {
      console.log(rental);
      return <RentalCard key={index} rentalDetails={rental} />;
    });
  }

  render() {
    return (
      <div className="container">
        <section id="rentalListing">
          <h1 className="page-title">Let's meet your new home</h1>
          <div className="row">{this.renderRentals()}</div>
        </section>
      </div>
    );
  }
}
