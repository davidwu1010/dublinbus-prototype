import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import { selectRoute } from '../../redux/planner/planner.actions';

function RouteCard(props) {
  const { steps, clickHandler } = props;

  function stepToDescription(step) {
    let instructions = step.instructions;
    if (step.travel_mode === 'TRANSIT') {
      instructions += ', ' + step.transit.line.short_name;
    }
    return instructions;
  }

  return (
    <Card variant="outlined">
      <CardActionArea onClick={clickHandler}>
        { steps.map((step, index) => (<Typography key={index}>{stepToDescription(step)}</Typography>)) }
      </CardActionArea>
    </Card>
  );
}


export default RouteCard;