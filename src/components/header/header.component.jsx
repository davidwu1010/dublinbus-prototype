import React from 'react';
import { AppBar, IconButton, Toolbar, Typography, makeStyles } from '@material-ui/core';
import  MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleDrawer } from '../../redux/drawer/drawer.action';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  title: {
    textDecoration: 'none',
    color: theme.palette.primary.contrastText
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  signInButton: {
    marginLeft: 'auto'
  }
}));

function Header(props) {
  const { toggleDrawer } = props;

  const classes = useStyles();
  return (
    <React.Fragment>
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
          <IconButton edge="start" className={classes.menuButton} onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        <Typography variant="h6" className={classes.title} component={RouterLink} to="/">Dublin Bus</Typography>
        <Button color="inherit" className={classes.signInButton} component={RouterLink} to="/sign-in">Sign In</Button>
      </Toolbar>
    </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = dispatch => ({
  toggleDrawer: () => dispatch(toggleDrawer())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);