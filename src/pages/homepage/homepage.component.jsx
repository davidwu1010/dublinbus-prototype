import React from 'react';
import MapContainer from '../../components/map-container/map-container.component';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Planner from '../../components/planner/planner.component';

const useStyles = makeStyles(theme => ({
  paperContainer: {
    position: 'fixed',
    width: '400px',
    height: 'calc(100% - 64px)',
    overflowX: 'hidden',
    overflowY: 'auto',
    [theme.breakpoints.down('xs')]: {
      position: 'relative',
      width: '100%',
      height: 'calc(100% - 48px)',
      overflow: 'visible'
    }
  }
}));

function HomePage(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper elevation={0} className={classes.paperContainer}>
        <Planner />
      </Paper>
      <Hidden xsDown>
        <MapContainer />
      </Hidden>
    </React.Fragment>
  );
}

export default HomePage;