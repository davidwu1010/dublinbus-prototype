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
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(theme => ({
  paperContainer: {
    position: 'fixed',
    width: '400px',
    height: 'calc(100vh - 64px)',
    overflowX: 'hidden',
    overflowY: 'auto',
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
      height: 'calc(100vh - 48px)',
    }
  }
}));

function HomePage(props) {
  const { routes } = props;

  const classes = useStyles();
  return (
    <>
      <Paper elevation={10} className={classes.paperContainer}>
        <Grid container direction="column">
          <Grid item>
            <FormInput />
          </Grid>
          {routes.map((route, index) => (<Grid item><RouteCard key={index} steps={route.legs[0].steps} /> </Grid>))}
        </Grid>
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