import React from 'react';

import { CssBaseline } from '@material-ui/core';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import LeftDrawer from './components/left-drawer/left-drawer.component';
import { Switch, Route } from 'react-router-dom';
import SignUp from './pages/sign-up/sign-up.component';
import SignIn from './pages/sign-in/sign-in.component';

function App(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <LeftDrawer />
      <Switch>
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route path="/" component={HomePage} />
      </Switch>
    </React.Fragment>
  );
}
export default App;
