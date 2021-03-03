/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(() => ({
  formControl: {
    fontSize: '1.7rem',
  },
  label: {
    fontSize: '2rem',
  },
}));

export default function StepBackRadioButtonsGroup(props) {
  const classes = useStyles();
  const { stepBackButton, setStepBackButton } = props;

  const handleChange = (event) => {
    setStepBackButton(event.target.value);
  };

  return (
    <FormControl className={classes.formControl} component="fieldset">
      <FormLabel className={classes.formControl} component="legend">
        Step back button
      </FormLabel>
      <RadioGroup
        className={classes.formControl}
        row
        aria-label="stepBackButton"
        name="stepBackButton"
        value={stepBackButton}
        onChange={handleChange}
      >
        <FormControlLabel
          className={classes.label}
          value="1"
          control={<Radio className={classes.label} color="default" />}
          label="On"
        />
        <FormControlLabel
          className={classes.label}
          value="0"
          control={<Radio className={classes.label} color="default" />}
          label="Off"
        />
      </RadioGroup>
    </FormControl>
  );
}
