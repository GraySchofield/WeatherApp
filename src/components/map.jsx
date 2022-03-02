import React, { Component } from "react";
import { connect } from "react-redux";
import { selectLocations } from "../store/weather";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

//This class demostrate how to use a class component with redux
class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { locations } = this.props;

    return (
      <div>
        <React.Fragment>
          <div>
            <b>Lattitude</b> : {locations.lat}
          </div>
          <div>
            <b>Longtitude</b> : {locations.lon}
          </div>
          <MapContainer
            className="map-container"
            center={[locations.lat, locations.lon]}
            zoom={13}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    locations: selectLocations(state),
  };
};

export default connect(mapStateToProps, null)(Map);
