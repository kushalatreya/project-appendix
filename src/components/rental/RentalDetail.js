import React, { Component } from "react";

export default class RentalDetail extends Component {
  render() {
    console.log(this.props.match.params.id);
    // debugger;
    return (
      <div>
        <h1>I am Rental Detail Component {this.props.match.params.id} </h1>
      </div>
    );
  }
}
