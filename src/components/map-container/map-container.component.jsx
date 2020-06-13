import React from 'react';

// import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { GoogleApiWrapper, Map, Polyline } from 'google-maps-react';
import { createStructuredSelector } from 'reselect';
import { selectPolylines, selectSelectedRoute } from '../../redux/planner/planner.selector';
import { connect } from 'react-redux';
import { selectRoute } from '../../redux/planner/planner.actions';

// const apiKey = 'AIzaSyBPyIqf7hOMSCjqSq--50UKiJ9Xzmbssmk';

const containerStyle = {
  position: 'fixed',
  height: '100vh',
  width: '100vw',
  zIndex: -1
};

const center = {
  lat: 53.3363,
  lng: -6.2769
};


function MapContainer(props) {
  const { polylines, selectRoute, selectedRoute } = props;
  return(
    <Map google={window.google} containerStyle={containerStyle} initialCenter={center} zoom={13} disableDefaultUI={true}>
      { polylines.map((polyline, index) => <Polyline key={index} path={polyline} zIndex={index === selectedRoute ? 1 : 0} strokeColor={index === selectedRoute ? '#669DF6' : '#BBBDBF'} strokeWeight={6} onClick={() => selectRoute(index)}/>) }
    </Map>
  );
}

const mapStateToProps = createStructuredSelector({
  polylines: selectPolylines,
  selectedRoute: selectSelectedRoute
});

const mapDispatchToProps = dispatch => ({
  selectRoute: routeId => dispatch(selectRoute(routeId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
