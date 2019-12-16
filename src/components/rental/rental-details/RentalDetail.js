import React from "react";

import { connect } from "react-redux";

import * as actions from "../../../actions";

class RentalDetail extends React.Component {
  componentWillMount() {
    //Dispatch action

    const rentalId = this.props.match.params.id;
    this.props.dispatch(actions.fetchRentalById(rentalId));
  }

  render() {
    // console.log(this.props.match.params.id);
    // debugger;
    const rental = this.props.rental;
    // TODO: always true as rental is empty obj. passing rental.id throws err. if found no id (make err msg) either from routing or in here.
    if (rental._id) {
      return (
        <div>
          <h1>I am {rental.title} </h1>
          <h1>I am Rs: {rental.dailyRate * 30} </h1>
          <h1>I am {rental.category} </h1>
        </div>
      );
    } else {
      return <h1>Loading ..</h1>;
    }
  }
}
function mapStateToProps(state) {
  return {
    rental: state.rental.data
  };
}

export default connect(mapStateToProps)(RentalDetail);
