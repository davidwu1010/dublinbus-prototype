import React from 'react';

// import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { GoogleApiWrapper, Map, Polyline } from 'google-maps-react';
import { createStructuredSelector } from 'reselect';
import { selectPolylines } from '../../redux/planner/planner.selector';
import { connect } from 'react-redux';

// const apiKey = 'AIzaSyBPyIqf7hOMSCjqSq--50UKiJ9Xzmbssmk';

const containerStyle = {
  width: '75vw',
  height: 'calc(100vh - 70px)',
  position: 'absolute',
};

const center = {
  lat: 53.3363,
  lng: -6.2769
};


function MapContainer(props) {
  const { polylines } = props;
  return(
    <Map google={window.google} containerStyle={containerStyle} initialCenter={center} zoom={13}>
      { polylines.map((polyline, index) => <Polyline key={index} path={polyline} />) }
    </Map>
  );
}

const mapStateToProps = createStructuredSelector({
  polylines: selectPolylines
});

export default connect(mapStateToProps)(MapContainer);
