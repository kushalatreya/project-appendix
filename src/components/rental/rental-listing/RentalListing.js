import React, { Component } from "react";
import RentalList from "./RentalList";

import { connect } from "react-redux";
import * as action from "../../../actions";

class RentalListing extends Component {
  componentWillMount() {
    this.props.dispatch(action.fetchRentals());
  }

  render() {
    return (
      <section id="rentalListing">
        <h1 className="page-title">Let's meet your new home</h1>
        <RentalList rentals={this.props.rentals} />
      </section>
    );
  }
}
function mapStateToProps(state) {
  return {
    rentals: state.rentals.data
  };
}

export default connect(mapStateToProps)(RentalListing);
