import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import Grid from '@material-ui/core/Grid';
import MapContainer from '../../components/map-container/map-container.component';
import Hidden from '@material-ui/core/Hidden';
import { createStructuredSelector } from 'reselect';
import { selectRoutes } from '../../redux/planner/planner.selector';
import { connect } from 'react-redux';
import RouteCard from '../../components/route-card/route-card.component';

function HomePage(props) {
  const { routes } = props;
  return (
    <Grid container>
      <Grid item xs={12} sm={3}>
        <FormInput />
        { routes.map((route, index) => (<RouteCard key={index} steps={route.legs[0].steps}/>) ) }
      </Grid>
      <Hidden xsDown>
        <Grid item xs="auto">
          <MapContainer />
      </Grid>
      </Hidden>
    </Grid>
  );
}

const mapStateToProps = createStructuredSelector({
  routes: selectRoutes,
});

export default connect(mapStateToProps)(HomePage);