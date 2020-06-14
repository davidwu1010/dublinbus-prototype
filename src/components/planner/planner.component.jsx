import React from 'react';
import FormInput from '../form-input/form-input.component';
import Grid from '@material-ui/core/Grid';
import RoutesList from '../routes-list/routes-list.component';

function Planner(props) {
  return (
    <Grid container direction="column">
      <Grid item>
        <FormInput />
      </Grid>
      <RoutesList />
    </Grid>
  );
}

export default Planner;