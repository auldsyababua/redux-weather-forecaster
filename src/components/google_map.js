import React, { Component } from "react";

class GoogleMap extends Component {
  //after component renders, create a new google maps
  //first arg is a reference to an html node - this is where google will embed the map on your onInputChange
  //second arg is an options argument: the properties the map should have.
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;
