import React, { Component } from "react";
// import PropTypes from "prop-types";

import MapGL, { Marker } from "react-map-gl";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import UserActions from "../../store/ducks/user";

import { Container } from "./styles";

class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
  };

  handleMapClick = e => {
    const { openUserModal, getUserCoordinates } = this.props;
    const [longitude, latitude] = e.lngLat;

    // alert(longitude + " - " + latitude);

    getUserCoordinates(latitude, longitude);

    openUserModal();
  };

  render() {
    const { data } = this.props.user;
    return (
      <Container>
        <MapGL
          {...this.state.viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken={
            "pk.eyJ1IjoiZGllZ28zZyIsImEiOiJjamh0aHc4em0wZHdvM2tyc3hqbzNvanhrIn0.3HWnXHy_RCi35opzKo8sHQ"
          }
          onViewportChange={viewport => this.setState({ viewport })}
        >
          {data.map(user => (
            <Marker
              key={user.id}
              latitude={user.coordinates.latitude}
              longitude={user.coordinates.longitude}
              onClick={this.handleMapClick}
              captureClick={true}
            >
              <img
                alt="MAPA"
                style={{
                  borderRadius: 100,
                  width: 48,
                  height: 48
                }}
                src={user.avatar_url}
              />
            </Marker>
          ))}
        </MapGL>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
