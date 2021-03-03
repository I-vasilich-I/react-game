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

export default function WinningNumberRadioButtonsGroup(props) {
  const classes = useStyles();
  const { winningNumber, setWinningNumber } = props;

  const handleChange = (event) => {
    setWinningNumber(event.target.value);
  };

  return (
    <FormControl className={classes.formControl} component="fieldset">
      <FormLabel className={classes.formControl} component="legend">
        Winning number
      </FormLabel>
      <RadioGroup
        className={classes.formControl}
        row
        aria-label="winningNumber"
        name="64"
        value={winningNumber}
        onChange={handleChange}
      >
        <FormControlLabel
          className={classes.label}
          value="64"
          control={<Radio className={classes.label} color="default" />}
          label="64"
        />
        <FormControlLabel
          className={classes.label}
          value="2048"
          control={<Radio className={classes.label} color="default" />}
          label="2048"
        />
      </RadioGroup>
    </FormControl>
  );
}
