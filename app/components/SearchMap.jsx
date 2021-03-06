import {
  GoogleMap,
  GoogleMapLoader,
  InfoWindow,
  Marker
} from 'react-google-maps';
import ListDisplay from './ListDisplay';
import React from 'react';
import mapStyle from './mapStyle.js';

const SearchMap = React.createClass({
  getInitialState() {
    return {
      buttonHover: 0,
      hover: false,
      windowPosition: null,
      windowPhoto: {},
      zoom: 0
    };
  },

  handleDisplay() {
    const image = Object.assign({}, this.state.windowPhoto);

    this.handleInfoClick();
    this.props.setDisplay(image);
  },

  handleClick(event) {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();

    this.props.imageSearch({ lat, lng });
  },

  handleInfoClick(photo) {
    if (!photo) {
      this.setState({ windowPosition: null, windowPhoto: {}});

      return;
    }
    const markerLoc = {
      lat: Number.parseFloat(photo.latitude),
      lng: Number.parseFloat(photo.longitude)
    };

    this.props.setCenter(markerLoc);
    this.setState({ windowPosition: markerLoc, windowPhoto: photo });
  },

  handleToggle() {
    if (this.props.favorites.length === 0) {
      this.props.getFavorites();
    }
    this.props.toggleFavorites();
  },

  handleEnter() {
    this.setState({ hover: true });
  },

  handleLeave() {
    this.setState({ hover: false });
  },

  handleButtonEnter(event) {
    this.setState({ buttonHover: event.currentTarget.getAttribute('value') });
  },

  handleButtonLeave() {
    this.setState({ buttonHover: 0 });
  },

  render() {
    const infoWindow = this.state.windowPosition
      ? <InfoWindow
        onCloseclick={this.handleInfoClick}
        options={{ pixelOffset: new google.maps.Size(0, -30) }}
        position={this.state.windowPosition}
      >
        <div>
          <h3>{this.state.windowPhoto.title}</h3>
          <button
            onClick={this.handleDisplay}
          >
            Go!
          </button>
        </div>

      </InfoWindow>
      : null;
    const center = this.props.searchLocation.lat
    ? this.props.searchLocation
    : { lat: 40.797245, lng: -99.336877 };
    const resultsList = this.props.displayFavorites && document.cookie
    ? this.props.favorites
    : this.props.imageList;

    return <div className="searchcontainer">
      <div className="mapcontainer">
        <section style={{ height: '100%', width: '100%' }}>
          <GoogleMapLoader
            containerElement={
              <div
                style={{
                  height: '100%'
                }}
              />
            }
            googleMapElement={
              <GoogleMap
                center={center}
                defaultOptions={{
                  styles: mapStyle,
                  streetViewControl: false,
                  mapTypeControl: false
                }}
                defaultZoom={3}
                onClick={this.handleClick}
              >
                {resultsList.map((image, index) => {
                  return <Marker
                    key={index}
                    onClick={() => (this.handleInfoClick(image))}
                    position={{
                      lat: Number.parseFloat(image.latitude),
                      lng: Number.parseFloat(image.longitude)
                    }}
                  />;
                })}
                {infoWindow}
              </GoogleMap>
          }
          />
        </section>
      </div>
      <ListDisplay
        displayFavorites={this.props.displayFavorites}
        favorites={this.props.favorites}
        getFavorites={this.props.getFavorites}
        imageList={this.props.imageList}
        onInfoClick={this.handleInfoClick}
        openToast={this.props.openToast}
        resultsList={resultsList}
        toggleFavorites={this.props.toggleFavorites}
      />
    </div>;
  }
});

export default SearchMap;
