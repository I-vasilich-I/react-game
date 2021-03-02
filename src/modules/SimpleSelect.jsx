// /* eslint-disable react/prop-types */
// import React, { useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import { getInitialBoardArray } from './utils/helpers';

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//     fontSize: '2rem',
//   },
//   label: {
//     fontSize: '2rem',
//   },
//   select: {
//     fontSize: '2rem',
//   },
//   menuItem: {
//     fontSize: '2rem',
//     backgroundColor: `#e0e0e0`,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

// export default function SimpleSelect(props) {
//   const classes = useStyles();
//   const { boardSize, setBoardSize, setHistory, setIsPopUpActive } = props;

//   const newGame = () => {
//     setHistory([
//       {
//         board: getInitialBoardArray(boardSize * boardSize),
//         score: 0,
//         win: false,
//         gameOver: false,
//       },
//     ]);
//   };

//   useEffect(() => {
//     newGame();
//     setIsPopUpActive(false);
//   }, [boardSize]);

//   const handleChange = (event) => {
//     setBoardSize(event.target.value);
//   };

//   return (
//     <div>
//       <FormControl className={classes.formControl}>
//         <InputLabel className={classes.label} id="demo-simple-select-label">
//           Board size
//         </InputLabel>
//         <Select
//           className={classes.select}
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={boardSize}
//           onChange={handleChange}
//         >
//           <MenuItem className={classes.menuItem} value={3}>
//             3x3
//           </MenuItem>
//           <MenuItem className={classes.menuItem} value={4}>
//             4x4
//           </MenuItem>
//           <MenuItem className={classes.menuItem} value={5}>
//             5x5
//           </MenuItem>
//           <MenuItem className={classes.menuItem} value={6}>
//             6x6
//           </MenuItem>
//         </Select>
//       </FormControl>
//     </div>
//   );
// }
