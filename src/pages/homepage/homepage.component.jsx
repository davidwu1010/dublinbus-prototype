import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import MapContainer from '../../components/map-container/map-container.component';
import Hidden from '@material-ui/core/Hidden';
import { createStructuredSelector } from 'reselect';
import { selectRoutes } from '../../redux/planner/planner.selector';
import { connect } from 'react-redux';
import RouteCard from '../../components/route-card/route-card.component';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paperContainer: {
    width: '400px',
    position: 'fixed',
    height: '100vh',
    overflowY: 'auto',
    [theme.breakpoints.down('xs')]: {
      width: '100vw'
    }
  }
}));

function HomePage(props) {
  const { routes } = props;

  const classes = useStyles();
  return (
    <>
      <Paper elevation={10} className={classes.paperContainer} spacing={1}>
          <FormInput/>
          { routes.map((route, index) => (<RouteCard key={index} steps={route.legs[0].steps}/>) ) }
      </Paper>
      <Hidden xsDown>
        <MapContainer />
      </Hidden>
      </>
  );
}

const mapStateToProps = createStructuredSelector({
  routes: selectRoutes,
});

export default connect(mapStateToProps)(HomePage);