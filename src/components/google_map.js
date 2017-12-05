import React, { Component } from 'react';

class GoogleMap extends Compnent {
  //after component renders, create a new google maps
  //first arg is a reference to an html node - this is where google will embed the map on your onInputChange
  //second arg is the properties the map should have
  ComponentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  render() {
    return <div ref='map' />;
  }
}

export default GoogleMap;
