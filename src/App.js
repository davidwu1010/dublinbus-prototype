import React, { useEffect, useState } from 'react';

import { CssBaseline, IconButton, Toolbar } from '@material-ui/core';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import LeftDrawer from './components/left-drawer/left-drawer.component';
import MenuIcon from '@material-ui/icons/Menu';
import { toggleDrawer } from './redux/drawer/drawer.action';
import { connect } from 'react-redux';

function App(props) {
  const { toggleDrawer } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <HomePage />
      <LeftDrawer />
    </React.Fragment>
  );
}
export default App;
