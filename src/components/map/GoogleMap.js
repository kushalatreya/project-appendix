import React from "react";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  /*   Marker,
   */ Circle
} from "react-google-maps";

// import Geocode from "react-geocode";

const MapComponent = props => {
  const coordinates = props.coordinates;
  //debugger;
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={coordinates}
      center={coordinates}
    >
      <Circle
        center={coordinates}
        radius={200}
        options={{
          fillColor: "#87ceeb",
          strokeColor: "#DBD7D2"
        }}
      />
    </GoogleMap>
  );
};

function withGeocode(WrappedComponent) {
  return class extends React.Component {
    state = {
      coordinates: {
        lat: 0,
        lng: 0
      }
    };

    UNSAFE_componentWillMount() {
      // debugger;
      this.geocodeLocation();
      // console.log(this.geocodeLocation());
    }

    geocodeLocation() {
      const location = this.props.location;
      console.log(location);
      const geocoder = new window.google.maps.Geocoder();
      console.log(geocoder.geocode);

      geocoder.geocode({ address: location }, (result, status) => {
        // debugger;
        console.log(result);
        if (status === "OK") {
          const geometry = result[0].geometry.location;
          const coordinates = { lat: geometry.lat(), lng: geometry.lng() };

          this.setState({
            coordinates: coordinates
          });
        } else {
          /* console.log(status);
          console.log("status"); */
          alert(
            "Geocode was not successful for the following reason: " + status
          );
        }
      });
    }

    render() {
      // this.geocodeLocation();
      // alert(this.props.location);
      return <WrappedComponent {...this.state} />;
    }
  };
}

export const MapWithGeocode = withScriptjs(
  withGoogleMap(withGeocode(MapComponent))
);
