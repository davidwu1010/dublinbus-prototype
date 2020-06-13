import React from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {
  autocompleteStart,
  setDest,
  setOrigin,
  directionsStart,
  switchAutocompleteOptions
} from '../../redux/planner/planner.actions';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { createStructuredSelector } from 'reselect';
import {
  selectDest, selectDestPredictions,
  selectOrigin,
  selectOriginPredictions,
} from '../../redux/planner/planner.selector';
import Card from '@material-ui/core/Card';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import * as dayjs from 'dayjs';

const useStyles = makeStyles({
  card: {
    padding: '16px 0'
  },
  input: {
    width: '320px',
  },
  switchButton: {
    position: 'absolute',
    right: '8px',
    top: '50px'
  },
  submitButton: {
    height: '56px'
  }
});

function FormInput(props) {
  const { startAutocomplete,
          setOrigin,
          setDest,
          originPredictions,
          destPredictions,
          startDirections,
          origin,
          dest,
          switchAutocompleteOptions
        } = props;

  const classes = useStyles();

  function localTimeToISOString() {
    return dayjs().format('YYYY-MM-DDTHH:mm:ss');
  }

  function originHandler(event, value) {
    setOrigin(value);
    startAutocomplete(value, 'origin');
  }

  function destHandler(event, value) {
    setDest(value);
    startAutocomplete(value, 'dest');
  }

  function switchOriginDest(origin, dest) {
    setDest(origin);
    setOrigin(dest);
    switchAutocompleteOptions();
  }

  return (
    <Card variant="outlined" className={classes.card}>
      <Fab color="primary" className={classes.switchButton} onClick={() => switchOriginDest(origin, dest)}>
        <ImportExportIcon />
      </Fab>
      <Grid container direction="column" alignItems="center" spacing={1}>
        <Grid item>
          <Autocomplete
            freeSolo
            options={originPredictions}
            inputValue={origin}
            renderInput={params => <TextField {...params} label="Origin" variant="outlined" />}
            onInputChange={originHandler}
            className={classes.input}
          />
        </Grid>
        <Grid item>
          <Autocomplete
            freeSolo
            options={destPredictions}
            inputValue={dest}
            renderInput={params => <TextField {...params} label="Destination" variant="outlined" />}
            onInputChange={destHandler}
            className={classes.input}
          />
        </Grid>
        <Grid item>
          <TextField
            id="datetime-local"
            label="Depart at"
            type="datetime-local"
            defaultValue={localTimeToISOString()}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            className={classes.input}
          />
        </Grid>
        <Grid item>
          <Button variant="contained"
                  color="primary"
                  onClick={() => startDirections(origin, dest)}
                  className={clsx(classes.input, classes.submitButton)}
          >
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
  setDest: dest => dispatch(setDest(dest)),
  startDirections: (origin, dest) => dispatch(directionsStart(origin, dest)),
  switchAutocompleteOptions: () => dispatch(switchAutocompleteOptions())
});

export default connect(mapStateToProps, mapDispatchToProps)(FormInput);