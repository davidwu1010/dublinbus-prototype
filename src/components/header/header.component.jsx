import React from 'react';
import { AppBar, IconButton, Toolbar, Typography, Hidden, Tabs, Tab, makeStyles } from '@material-ui/core';
import  MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleDrawer } from '../../redux/drawer/drawer.action';

const useStyles = makeStyles((theme) => ({
  loginButton: {
    marginLeft: 'auto'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

function Header(props) {
  const { toggleDrawer } = props;

  const classes = useStyles();
  return (
    <React.Fragment>
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
          <IconButton edge="start" className={classes.menuButton} onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        <Typography variant="h6">Dublin Bus</Typography>
        <Button className={classes.loginButton} color="inherit">Login</Button>
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