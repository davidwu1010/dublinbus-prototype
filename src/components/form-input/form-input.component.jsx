import React from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { autocompleteStart, setDest, setOrigin, directionsStart } from '../../redux/planner/planner.actions';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { createStructuredSelector } from 'reselect';
import {
  selectDest, selectDestPredictions,
  selectOrigin,
  selectOriginPredictions,
} from '../../redux/planner/planner.selector';
import Card from '@material-ui/core/Card';

function FormInput(props) {
  const { startAutocomplete, setOrigin, setDest, originPredictions, destPredictions, startDirections, origin, dest } = props;

  function originHandler(event, value) {
    setOrigin(value);
    startAutocomplete(value, 'origin');
  }

  function destHandler(event, value) {
    setDest(value);
    startAutocomplete(value, 'dest');
  }

  return (
    <Card variant="outlined">
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid container item alignItems="center">
            <Grid container item xs={10} direction="column">
              <Autocomplete
                options={originPredictions}
                renderInput={params => <TextField {...params}/> }
                onInputChange={originHandler}
              />
              <Autocomplete
                options={destPredictions}
                renderInput={params => <TextField {...params}/> }
                onInputChange={destHandler}
              />
            </Grid>
            <Grid item xs={2}>
              <Button>
                <ImportExportIcon />
              </Button>
            </Grid>
          </Grid>
          <Grid item>

          </Grid>
          <Grid item>
            <Button variant="contained"
              color="primary"
              onClick={() => startDirections(origin, dest)}>
              Submit
            </Button>
          </Grid>
        </Grid>
    </Card>
  );
}

const mapStateToProps = createStructuredSelector({
  originPredictions: selectOriginPredictions,
  destPredictions: selectDestPredictions,
  origin: selectOrigin,
  dest: selectDest
});

const mapDispatchToProps = dispatch => ({
   startAutocomplete: (input, source) => dispatch(autocompleteStart(input, source)),
   setOrigin: origin => dispatch(setOrigin(origin)),
   setDest : dest => dispatch(setDest(dest)),
   startDirections: (origin, dest) => dispatch(directionsStart(origin, dest)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormInput);