import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Grid from '@material-ui/core/Grid';
import RouteCard from '../route-card/route-card.component';
import { selectRoutes } from '../../redux/planner/planner.selector';
import { selectRoute } from '../../redux/planner/planner.actions';

function RoutesList(props) {
  const { routes, selectRoute } = props;
  return (
    <React.Fragment>
      {routes.map((route, index) => (<Grid item key={index}><RouteCard steps={route.legs[0].steps} clickHandler={() => selectRoute(index)}/> </Grid>))}
    </React.Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  routes: selectRoutes
});

const mapDispatchToProps = dispatch => ({
  selectRoute: routeID => dispatch(selectRoute(routeID))
});

export default connect(mapStateToProps, mapDispatchToProps)(RoutesList);