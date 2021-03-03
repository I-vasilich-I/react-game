/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _modules_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/App */ "./src/modules/App.jsx");



react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_modules_App__WEBPACK_IMPORTED_MODULE_2__.default, null), document.getElementById('root'));

/***/ }),

/***/ "./src/modules/Alert.jsx":
/*!*******************************!*\
  !*** ./src/modules/Alert.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransitionAlertsWin": () => (/* binding */ TransitionAlertsWin),
/* harmony export */   "TransitionAlertsLose": () => (/* binding */ TransitionAlertsLose)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/Alert.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/Collapse.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* eslint-disable prettier/prettier */

/* eslint-disable react/prop-types */






var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.default)(function (theme) {
  return {
    root: {
      width: '80%',
      '& > * + *': {
        marginTop: theme.spacing(2)
      },
      position: 'absolute',
      top: 0,
      left: '10%'
    },
    alert__text: {
      fontSize: '3rem',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    }
  };
});

function TransitionAlertsWin(props) {
  var classes = useStyles();
  var openWin = props.openWin,
      setOpenWin = props.setOpenWin;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_2__.default, {
    "in": openWin
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_3__.default, {
    severity: "success",
    className: classes.alert__text,
    action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__.default, {
      "aria-label": "close",
      color: "inherit",
      size: "small",
      onClick: function onClick() {
        setOpenWin(false);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5__.default, {
      fontSize: "inherit"
    }))
  }, "Congrats, you won!")));
}

function TransitionAlertsLose(props) {
  var classes = useStyles();
  var openLose = props.openLose,
      setOpenLose = props.setOpenLose;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_2__.default, {
    "in": openLose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_3__.default, {
    severity: "error",
    className: classes.alert__text,
    action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__.default, {
      "aria-label": "close",
      color: "inherit",
      size: "small",
      onClick: function onClick() {
        setOpenLose(false);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5__.default, {
      fontSize: "inherit"
    }))
  }, "Sorry, you lose. Better luck next time.")));
}



/***/ }),

/***/ "./src/modules/App.jsx":
/*!*****************************!*\
  !*** ./src/modules/App.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board */ "./src/modules/Board.jsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/modules/Header.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./src/modules/Footer.jsx");
/* harmony import */ var _PopUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PopUp */ "./src/modules/PopUp.jsx");
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Alert */ "./src/modules/Alert.jsx");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/helpers */ "./src/modules/utils/helpers.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var App = function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(4),
      _useState2 = _slicedToArray(_useState, 2),
      boardSize = _useState2[0],
      setBoardSize = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_utils_helpers__WEBPACK_IMPORTED_MODULE_6__.getValueFromLocalStorage)('bestScore') || [0]),
      _useState4 = _slicedToArray(_useState3, 2),
      bestScore = _useState4[0],
      setBestScore = _useState4[1];

  var localHistory = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_6__.getValueFromLocalStorage)('2048-history');
  var isLocalBoardSizeSame = localHistory && localHistory[localHistory.length - 1].board.length === boardSize * boardSize;

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(localHistory && isLocalBoardSizeSame ? localHistory : [{
    board: (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_6__.getInitialBoardArray)(boardSize * boardSize),
    score: 0,
    win: false,
    gameOver: false
  }]),
      _useState6 = _slicedToArray(_useState5, 2),
      history = _useState6[0],
      setHistory = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isPopUpActive = _useState8[0],
      setIsPopUpActive = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      openWin = _useState10[0],
      setOpenWin = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      openLose = _useState12[0],
      setOpenLose = _useState12[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "App"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "hidden"
  }, "2048"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_5__.TransitionAlertsWin, {
    openWin: openWin,
    setOpenWin: setOpenWin
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_5__.TransitionAlertsLose, {
    openLose: openLose,
    setOpenLose: setOpenLose
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PopUp__WEBPACK_IMPORTED_MODULE_4__.default, {
    boardSize: boardSize,
    setBoardSize: setBoardSize,
    setHistory: setHistory,
    bestScore: bestScore,
    isPopUpActive: isPopUpActive,
    setIsPopUpActive: setIsPopUpActive
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__.default, {
    bestScore: bestScore,
    boardSize: boardSize,
    setBoardSize: setBoardSize,
    history: history,
    setHistory: setHistory,
    isPopUpActive: isPopUpActive,
    setIsPopUpActive: setIsPopUpActive
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Board__WEBPACK_IMPORTED_MODULE_1__.default, {
    history: history,
    boardSize: boardSize
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__.default, {
    bestScore: bestScore,
    setBestScore: setBestScore,
    boardSize: boardSize,
    history: history,
    setHistory: setHistory,
    setOpenWin: setOpenWin,
    setOpenLose: setOpenLose
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/modules/Board.jsx":
/*!*******************************!*\
  !*** ./src/modules/Board.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* eslint-disable react/prop-types */


var Board = function Board(props) {
  var history = props.history,
      boardSize = props.boardSize;
  var current = history[history.length - 1];
  var board = current.board;
  var tileStyle = {
    4: 'tile',
    3: 'tile tile--3',
    5: 'tile tile--5',
    6: 'tile tile--6'
  };
  var boardStyle = "board".concat(boardSize !== 4 ? " board-".concat(boardSize) : '');

  var setValue = function setValue(elem) {
    if (!elem) return '';
    return elem;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: boardStyle
  }, board.map(function (elem, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      // eslint-disable-next-line react/no-array-index-key
      key: id,
      className: "".concat(tileStyle[boardSize], " tile--").concat(setValue(elem) ? setValue(elem) : 0)
    }, setValue(elem));
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);

/***/ }),

/***/ "./src/modules/Footer.jsx":
/*!********************************!*\
  !*** ./src/modules/Footer.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ "./node_modules/@material-ui/icons/ArrowBack.js");
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ArrowForward */ "./node_modules/@material-ui/icons/ArrowForward.js");
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ArrowDownward */ "./node_modules/@material-ui/icons/ArrowDownward.js");
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ArrowUpward */ "./node_modules/@material-ui/icons/ArrowUpward.js");
/* harmony import */ var _material_ui_icons_SlowMotionVideo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/SlowMotionVideo */ "./node_modules/@material-ui/icons/SlowMotionVideo.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/helpers */ "./src/modules/utils/helpers.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable react/prop-types */








var Footer = function Footer(props) {
  var bestScore = props.bestScore,
      setBestScore = props.setBestScore,
      boardSize = props.boardSize,
      history = props.history,
      setHistory = props.setHistory,
      setOpenWin = props.setOpenWin,
      setOpenLose = props.setOpenLose;
  var currentBestScore = bestScore[bestScore.length - 1] ? bestScore[bestScore.length - 1] : 0;
  var current = history[history.length - 1];
  var board = current.board,
      score = current.score,
      win = current.win,
      gameOver = current.gameOver;
  var squareBoardSize = boardSize * boardSize;
  var newScore = 0;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      play = _useState2[0],
      setPlay = _useState2[1];

  var isWin = function isWin(array) {
    var tempArr = _toConsumableArray(array).sort(function (a, b) {
      return a - b;
    });

    return tempArr[tempArr.length - 1] >= 64;
  };

  var handleGameOver = function handleGameOver() {
    if (!gameOver) {
      setOpenLose(true);
      setPlay(false);
    }

    return true;
  };

  var setNewBoard = function setNewBoard(newBoard) {
    var checkObj = {
      resultBoard: null,
      winCheck: null,
      gameOver: null
    };

    if (!(0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.areArraysEqual)(newBoard, board)) {
      var tempBoard = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.getNewBoardArray)(newBoard);
      checkObj.resultBoard = tempBoard !== -1 ? tempBoard : newBoard;

      if (isWin(checkObj.resultBoard) && !win) {
        checkObj.winCheck = true;
        setOpenWin(true);
      } // eslint-disable-next-line no-use-before-define


      if (isGameOver(checkObj.resultBoard)) checkObj.gameOver = handleGameOver();

      if (!gameOver) {
        setHistory(history.concat({
          board: checkObj.resultBoard || board,
          score: score + newScore,
          win: checkObj.winCheck || win,
          gameOver: checkObj.gameOver || gameOver
        }));
        (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.setValueInLocalStorage)('2048-history', history.concat({
          board: checkObj.resultBoard || board,
          score: score + newScore,
          win: checkObj.winCheck || win,
          gameOver: checkObj.gameOver || gameOver
        }));
      }
    }

    var newBestScore = score + newScore > currentBestScore ? score + newScore : null;

    if (newBestScore) {
      setBestScore(bestScore.concat(newBestScore));
      (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.setValueInLocalStorage)('bestScore', bestScore.concat(newBestScore));
    }
  };

  var processLine = function processLine(line) {
    var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var trimLine = line.filter(function (elem) {
      return !!elem;
    });
    if (direction) trimLine.reverse();

    for (var j = 0; j < trimLine.length; j++) {
      if (trimLine[j] === trimLine[j + 1]) {
        newScore += trimLine[j] + trimLine[j + 1];
        var _ref = [trimLine[j] + trimLine[j + 1], 0];
        trimLine[j] = _ref[0];
        trimLine[j + 1] = _ref[1];
      }
    }

    var newLine = trimLine.filter(function (elem) {
      return !!elem;
    });

    while (newLine.length < line.length) {
      newLine.push(0);
    }

    return direction ? newLine.reverse() : newLine;
  };

  var getRow = function getRow(array, i) {
    return array.filter(function (elem, id) {
      return id >= i && id < i + boardSize;
    });
  };

  var getColumn = function getColumn(array, i) {
    return array.filter(function (elem, id) {
      return (id - i) % boardSize === 0;
    });
  };

  var updateNewBoardHorizontal = function updateNewBoardHorizontal(newBoard, i) {
    var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var newLine = processLine(getRow(board, i), direction);
    newLine.map(function (elem, id) {
      // eslint-disable-next-line no-param-reassign
      newBoard[id + i] = elem;
      return elem;
    });
  };

  var updateNewBoardVertical = function updateNewBoardVertical(newBoard, i) {
    var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var newLine = processLine(getColumn(board, i), direction);
    newLine.map(function (elem, id) {
      // eslint-disable-next-line no-param-reassign
      newBoard[id * boardSize + i] = elem;
      return elem;
    });
  };

  var moveLeft = function moveLeft() {
    var newBoard = new Array(squareBoardSize);

    for (var i = 0; i < squareBoardSize; i += boardSize) {
      updateNewBoardHorizontal(newBoard, i);
    }

    setNewBoard(newBoard);
  };

  var moveRight = function moveRight() {
    var newBoard = new Array(squareBoardSize);

    for (var i = 0; i < squareBoardSize; i += boardSize) {
      updateNewBoardHorizontal(newBoard, i, true);
    }

    setNewBoard(newBoard);
  };

  var moveUp = function moveUp() {
    var newBoard = new Array(squareBoardSize);

    for (var i = 0; i < boardSize; i++) {
      updateNewBoardVertical(newBoard, i);
    }

    setNewBoard(newBoard);
  };

  var moveDown = function moveDown() {
    var newBoard = new Array(squareBoardSize);

    for (var i = 0; i < boardSize; i++) {
      updateNewBoardVertical(newBoard, i, true);
    }

    setNewBoard(newBoard);
  };

  var isGameOver = function isGameOver(array) {
    var emptySpots = array.filter(function (elem) {
      return !elem;
    }).length;
    if (emptySpots) return false;

    for (var i = 0; i < squareBoardSize; i += boardSize) {
      var line = getRow(array, i);

      for (var j = 0; j < line.length - 1; j++) {
        if (line[j] === line[j + 1]) {
          return false;
        }
      }
    }

    for (var _i2 = 0; _i2 < boardSize; _i2++) {
      var _line = getColumn(array, _i2);

      for (var _j = 0; _j < _line.length - 1; _j++) {
        if (_line[_j] === _line[_j + 1]) {
          return false;
        }
      }
    }

    return true;
  };

  var handleEvent = function handleEvent(e) {
    if (e.stopPropagation) e.stopPropagation();
    if (e.code === 'ArrowLeft' || e.code === 'KeyA') moveLeft();
    if (e.code === 'ArrowRight' || e.code === 'KeyD') moveRight();
    if (e.code === 'ArrowUp' || e.code === 'KeyW') moveUp();
    if (e.code === 'ArrowDown' || e.code === 'KeyS') moveDown();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.addEventListener('keydown', handleEvent);
    return function () {
      document.removeEventListener('keydown', handleEvent);
    };
  }, ['keydown', handleEvent]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var count = 1;
    var interval = setInterval(function () {
      if (play && !gameOver) {
        moveUp();
        if (count % 3 === 0) moveRight();
        if (count % 2 === 0) moveLeft(); // if (count % 2 !==0) moveDown();

        count++;
      }
    }, 700);
    return function () {
      return clearInterval(interval);
    };
  }, [play, gameOver, history]);

  var autoPlay = function autoPlay() {
    return play ? setPlay(false) : setPlay(true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "footer__info"
  }, "HOW TO PLAY: Use your arrow keys on keyboard or in app to move the tiles (w,a,s,d works too). Tiles with the same number merge into one when they touch. Add them up to reach 64(2048 hard to test)! You can continue to play after you have reached 64(2048 hard to test). Auto play runs until game over(click play button). Also you can stop auto play clicking again same button."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "footer__bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "footer__links"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://github.com/I-vasilich-I",
    className: "footer__link",
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "github__logo",
    src: "assets/images/GitHub-Mark.png",
    alt: "Oleg Vaskevich"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://rs.school/js/",
    className: "footer__link",
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "assets/images/rs_school_js.svg",
    alt: "The Rolling Scopes"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "2021"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "button button--nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_SlowMotionVideo__WEBPACK_IMPORTED_MODULE_2__.default, {
    fontSize: "inherit",
    onClick: autoPlay
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "button__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "button button--nav item-b",
    onClick: moveLeft
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_3__.default, {
    fontSize: "large"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "button button--nav item-a",
    onClick: moveUp
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_4__.default, {
    fontSize: "large"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "button button--nav item-d",
    onClick: moveRight
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_5__.default, {
    fontSize: "large"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "button button--nav item-c",
    onClick: moveDown
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_6__.default, {
    fontSize: "large"
  })))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/modules/Header.jsx":
/*!********************************!*\
  !*** ./src/modules/Header.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_icons_Reply__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Reply */ "./node_modules/@material-ui/icons/Reply.js");
/* harmony import */ var _material_ui_icons_FiberNewOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/FiberNewOutlined */ "./node_modules/@material-ui/icons/FiberNewOutlined.js");
/* harmony import */ var _material_ui_icons_Fullscreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Fullscreen */ "./node_modules/@material-ui/icons/Fullscreen.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/helpers */ "./src/modules/utils/helpers.js");
/* eslint-disable react/prop-types */







var Header = function Header(props) {
  var setIsPopUpActive = props.setIsPopUpActive,
      bestScore = props.bestScore,
      boardSize = props.boardSize,
      history = props.history,
      setHistory = props.setHistory;
  var currentBestScore = bestScore ? bestScore[bestScore.length - 1] : 0;
  var current = history[history.length - 1];
  var score = current.score;

  var popUp = function popUp() {
    setIsPopUpActive(true);
  };

  var newGame = function newGame() {
    // localStorage.removeItem('2048-history');
    var newHistory = [{
      board: (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.getInitialBoardArray)(boardSize * boardSize),
      score: 0,
      win: false,
      gameOver: false
    }];
    setHistory(newHistory);
    (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.setValueInLocalStorage)('2048-history', newHistory);
  };

  var stepBack = function stepBack() {
    if (history.length < 2) return;
    setHistory(history.slice(0, history.length - 1));
    (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.setValueInLocalStorage)('2048-history', history.slice(0, history.length - 1));
  };

  var fullScreen = function fullScreen() {
    document.body.requestFullscreen();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header__top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "logo"
  }, "2048"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "score__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "score"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "score__title"
  }, "Score"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "score__count"
  }, score)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "score"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "score__title"
  }, "Best score"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "score__count"
  }, currentBestScore)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header__bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "button button--nav",
    onClick: popUp
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_2__.default, {
    fontSize: "inherit"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "button button--nav",
    onClick: newGame
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_FiberNewOutlined__WEBPACK_IMPORTED_MODULE_3__.default, {
    fontSize: "inherit"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "button button--nav",
    onClick: stepBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Reply__WEBPACK_IMPORTED_MODULE_4__.default, {
    fontSize: "inherit"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "button  button--nav",
    onClick: fullScreen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Fullscreen__WEBPACK_IMPORTED_MODULE_5__.default, {
    fontSize: "inherit"
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/modules/PopUp.jsx":
/*!*******************************!*\
  !*** ./src/modules/PopUp.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _SimpleSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimpleSelect */ "./src/modules/SimpleSelect.jsx");
/* eslint-disable react/no-array-index-key */

/* eslint-disable react/prop-types */



var PopUp = function PopUp(props) {
  var isPopUpActive = props.isPopUpActive,
      setIsPopUpActive = props.setIsPopUpActive,
      bestScore = props.bestScore,
      boardSize = props.boardSize,
      setBoardSize = props.setBoardSize,
      setHistory = props.setHistory;
  var popupClassName = isPopUpActive ? 'popup blackout' : 'popup popup--hidden';
  var bestScoreArray = bestScore.slice(bestScore.length - 10, bestScore.length);

  var handleClick = function handleClick(e) {
    if (e.target.className === 'popup blackout') setIsPopUpActive(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.addEventListener('mousedown', handleClick);
    return function () {
      document.removeEventListener('mousedown', handleClick);
    };
  }, ['mousedown', handleClick]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: popupClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "popup__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SimpleSelect__WEBPACK_IMPORTED_MODULE_1__.default, {
    setIsPopUpActive: setIsPopUpActive,
    boardSize: boardSize,
    setBoardSize: setBoardSize,
    setHistory: setHistory
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "best-score__list"
  }, "Best score:", bestScoreArray.reverse().map(function (elem, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: id + 1,
      className: "best-score__item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "best-score__id"
    }, id + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "best-score__score"
    }, elem));
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopUp);

/***/ }),

/***/ "./src/modules/SimpleSelect.jsx":
/*!**************************************!*\
  !*** ./src/modules/SimpleSelect.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SimpleSelect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/Select.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/helpers */ "./src/modules/utils/helpers.js");
/* eslint-disable react/prop-types */







var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.default)(function (theme) {
  return {
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      fontSize: '2rem'
    },
    label: {
      fontSize: '2rem'
    },
    select: {
      fontSize: '2rem'
    },
    menuItem: {
      fontSize: '2rem',
      backgroundColor: "#e0e0e0"
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  };
});
function SimpleSelect(props) {
  var classes = useStyles();
  var boardSize = props.boardSize,
      setBoardSize = props.setBoardSize,
      setHistory = props.setHistory,
      setIsPopUpActive = props.setIsPopUpActive;

  var newGame = function newGame(size) {
    setHistory([{
      board: (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.getInitialBoardArray)(size * size),
      score: 0,
      win: false,
      gameOver: false
    }]);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setIsPopUpActive(false);
  }, [boardSize]);

  var handleChange = function handleChange(event) {
    setBoardSize(event.target.value);
    newGame(event.target.value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3__.default, {
    className: classes.formControl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__.default, {
    className: classes.label,
    id: "demo-simple-select-label"
  }, "Board size"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__.default, {
    className: classes.select,
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: boardSize,
    onChange: handleChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__.default, {
    className: classes.menuItem,
    value: 3
  }, "3x3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__.default, {
    className: classes.menuItem,
    value: 4
  }, "4x4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__.default, {
    className: classes.menuItem,
    value: 5
  }, "5x5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__.default, {
    className: classes.menuItem,
    value: 6
  }, "6x6"))));
}

/***/ }),

/***/ "./src/modules/utils/helpers.js":
/*!**************************************!*\
  !*** ./src/modules/utils/helpers.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNewBoardArray": () => (/* binding */ getNewBoardArray),
/* harmony export */   "getInitialBoardArray": () => (/* binding */ getInitialBoardArray),
/* harmony export */   "areArraysEqual": () => (/* binding */ areArraysEqual),
/* harmony export */   "getValueFromLocalStorage": () => (/* binding */ getValueFromLocalStorage),
/* harmony export */   "setValueInLocalStorage": () => (/* binding */ setValueInLocalStorage)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var areArraysEqual = function areArraysEqual(arr1, arr2) {
  return arr1.toString() === arr2.toString();
};

var getValueFromLocalStorage = function getValueFromLocalStorage(name) {
  return JSON.parse(localStorage.getItem(name)) || null;
};

var setValueInLocalStorage = function setValueInLocalStorage(name, value) {
  return localStorage.setItem(name, JSON.stringify(value));
};

var getArrayOfEmptySpotIds = function getArrayOfEmptySpotIds(array) {
  return array.map(function (elem, id) {
    return !elem ? id : -1;
  }).filter(function (elem) {
    return elem !== -1;
  });
};

var getRandomEmptySpotId = function getRandomEmptySpotId(Arraylength) {
  return Math.floor(Math.random() * Math.floor(Arraylength));
};

var getNewBoardArray = function getNewBoardArray(array) {
  var newBoard = _toConsumableArray(array);

  var emptySpotsOnBoard = getArrayOfEmptySpotIds(array);
  if (!emptySpotsOnBoard.length) return -1;
  var number = Math.floor(Math.random() < 0.8 ? 2 : 4);
  var spotId = getRandomEmptySpotId(emptySpotsOnBoard.length);
  var id = emptySpotsOnBoard[spotId];
  newBoard[id] = number;
  return newBoard;
};

var getInitialBoardArray = function getInitialBoardArray(squareBoardSize) {
  return getNewBoardArray(getNewBoardArray(Array(squareBoardSize).fill(0)));
};



/***/ }),

/***/ "./src/assets/sass/style.scss":
/*!************************************!*\
  !*** ./src/assets/sass/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./node_modules/@babel/polyfill/lib/index.js","vendors-node_modules_babel_polyfill_lib_index_js-node_modules_material-ui_core_esm_Collapse_C-e3d753"],
/******/ 			["./src/index.jsx","vendors-node_modules_babel_polyfill_lib_index_js-node_modules_material-ui_core_esm_Collapse_C-e3d753"],
/******/ 			["./src/assets/sass/style.scss","vendors-node_modules_babel_polyfill_lib_index_js-node_modules_material-ui_core_esm_Collapse_C-e3d753"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgame"] = self["webpackChunkgame"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map