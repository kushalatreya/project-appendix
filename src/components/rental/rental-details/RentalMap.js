import React, { Component } from "react";
import { MapWithGeocode } from "../../../components/map/GoogleMap";

export default class RentalMap extends Component {
  render() {
    const location = this.props.location;
    return (
      <MapWithGeocode
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDgsfdcPG3D-t5fUyi4moz2tzkzeFFzWDaw&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `390px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        location={location}
      />
    );
  }
}
