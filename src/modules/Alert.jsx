/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    position: 'absolute',
    top: 0,
    left: '10%',
  },
  alert__text: {
    fontSize: '3rem',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
}));

function TransitionAlertsWin(props) {
  const classes = useStyles();
  const { openWin, setOpenWin } = props;

  return (
    <div className={classes.root}>
      <Collapse in={openWin}>
        <Alert
          severity="success"
          className={classes.alert__text}
          action={(
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpenWin(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          )}
        >
          Congrats, you won!
        </Alert>
      </Collapse>
    </div>
  );
}

function TransitionAlertsLose(props) {
  const classes = useStyles();
  const { openLose, setOpenLose } = props;

  return (
    <div className={classes.root}>
      <Collapse in={openLose}>
        <Alert
          severity="error"
          className={classes.alert__text}
          action={(
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpenLose(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          )}
        >
          Sorry, you lose. Better luck next time.
        </Alert>
      </Collapse>
    </div>
  );
}

export { TransitionAlertsWin, TransitionAlertsLose }
