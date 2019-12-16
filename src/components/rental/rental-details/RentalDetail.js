import React from "react";
import RentalDetailInfo from "./RentalDetailInfo";

import { connect } from "react-redux";

import * as actions from "../../../actions";

class RentalDetail extends React.Component {
  componentWillMount() {
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
        <section id="rentalDetails">
          <div className="upper-section">
            <div className="row">
              <div className="col-md-6">
                <img src={rental.image} alt=""></img>
              </div>
              <div className="col-md-6">
                <img src={rental.image} alt=""></img>
              </div>
            </div>
          </div>
          <div className="details-section">
            <div className="row">
              <div className="col-md-8">
                <RentalDetailInfo rental={rental} />
              </div>
              <div className="col-md-4"> BOOKING</div>
            </div>
          </div>
        </section>
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
