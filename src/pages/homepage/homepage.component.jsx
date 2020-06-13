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
    height: 'calc(100% - 64px)',
    overflowX: 'hidden',
    overflowY: 'auto',
    WebkitTransform: 'translate3d(0,0,0)',
    [theme.breakpoints.down('xs')]: {
      position: 'relative',
      width: '100%',
      height: 'calc(100% - 48px)',
      overflow: 'visible'
    }
  }
}));

function HomePage(props) {
  const { routes } = props;

  const classes = useStyles();
  return (
    <>
      <Paper elevation={0} className={classes.paperContainer}>
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