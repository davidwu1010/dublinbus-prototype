import React from 'react';
import { AppBar, IconButton, Toolbar, Typography, Hidden, Tabs, Tab, makeStyles } from '@material-ui/core';
import  MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  tabContainer: {
    marginLeft: 'auto'
  },
  appBar: {
    height: '70px'
  }
});

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Hidden smUp>
          <IconButton edge="start">
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Typography variant="h6">Dublin Bus</Typography>
        <Tabs value={false} className={classes.tabContainer}>
          <Tab label="Saved Routes"/>
          <Tab label="Timetable"/>
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default Header;