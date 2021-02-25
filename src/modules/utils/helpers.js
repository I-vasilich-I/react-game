const areArraysEqual = (arr1, arr2) => arr1.toString() === arr2.toString();

const getArrayOfEmptySpotIds = (array) =>
  array.map((elem, id) => (!elem ? id : -1)).filter((elem) => elem !== -1);

const getRandomEmptySpotId = (Arraylength) => Math.floor(Math.random() * Math.floor(Arraylength));

const getNewBoardArray = (array) => {
  const newBoard = [...array];
  const emptySpotsOnBoard = getArrayOfEmptySpotIds(array);
  if (!emptySpotsOnBoard.length) return -1;
  const number = Math.floor(Math.random() < 0.8 ? 2 : 4);
  const spotId = getRandomEmptySpotId(emptySpotsOnBoard.length);
  const id = emptySpotsOnBoard[spotId];
  newBoard[id] = number;
  return newBoard;
};

const getInitialBoardArray = () =>
  getNewBoardArray(getNewBoardArray([...Array(16).keys()].map(() => 0)));

export { getNewBoardArray, getInitialBoardArray, areArraysEqual };
