import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

function RouteCard(props) {
  const { steps } = props;

  function stepToDescription(step) {
    let instructions = step.instructions;
    if (step.travel_mode === 'TRANSIT') {
      instructions += ', ' + step.transit.line.short_name;
    }
    return instructions;
  }

  return (
    <Card variant="outlined">
      <CardContent >
        { steps.map((step, index) => (<Typography key={index}>{stepToDescription(step)}</Typography>)) }
      </CardContent>
    </Card>
  );
}

export default RouteCard;