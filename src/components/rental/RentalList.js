import React, { Component } from "react";
import RentalCard from "./RentalCard";
import { connect } from "react-redux";

import * as action from "../../actions";

class RentalList extends Component {
  renderRentals() {
    return this.props.rentals.map((rental, index) => {
      // console.log(rental);
      return <RentalCard key={index} rentalDetails={rental} />;
    });
  }

  componentWillMount() {
    this.props.dispatch(action.fetchRentals());
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
function mapStateToProps(state) {
  return {
    rentals: state.rentals.data
  };
}

export default connect(mapStateToProps)(RentalList);
