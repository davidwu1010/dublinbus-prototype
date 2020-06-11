import React, { useEffect, useState } from 'react';

import { CssBaseline } from '@material-ui/core';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import LeftDrawer from './components/left-drawer/left-drawer.component';

function App() {
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
