// import { EASY_SCORE_TYPE, HARD_SCORE_TYPE, MEDIUM_SCORE_TYPE, updateScore } from "./score_actions";
export const GENERATE_GAME_ACTION = "GENERATE_GAME_ACTION";
export const COLOR_SELECT_ACTION = "COLOR_SELECT_ACTION";
export const OPEN_ACTION = "OPEN_ACTION";
export const HIDE_MODAL = "HIDE_MODAL";
export const UPDATE_SCORE_ACTION = "UPDATE_SCORE_ACTION";
export const EASY_SCORE_TYPE = "EASY";
export const MEDIUM_SCORE_TYPE = "MEDIUM";
export const HARD_SCORE_TYPE = "HARD";
export function generateGame(difficulty) {
  return {
    type: GENERATE_GAME_ACTION,
    payload: difficulty,
  };
}

export function modalCheck(color, history) {
  return (dispatch, getState) => {
  const gameState = getState().gameReducer;
  const scoreState = getState().scoreReducer;
  let score = null;
  switch(gameState.difficulty){
    case EASY_SCORE_TYPE:
      score = scoreState.scoreEasy;
      break;
    case MEDIUM_SCORE_TYPE:
      score = scoreState.scoreMedium;
      break;
    case HARD_SCORE_TYPE:
      score = scoreState.scoreHard;
      break;
      default:
        break;
  }
  console.log(score)
  console.log(gameState.difficulty)
  console.log(gameState.livesCount)
  console.log(gameState.guestColor !== color)
  console.log(gameState.counter)
    if (gameState.livesCount === 1 && gameState.guestColor !== color) {
      if(gameState.counter > score){
        console.log("IN RIGHT WAY")
        console.log(score)
        console.log(gameState.difficulty)
      dispatch(updateScore(gameState.difficulty, gameState.counter));
      }
      dispatch(
        openModal({
          title: gameState.counter,
          onAcceptButton: () => dispatch(hideModal()),
          onRejectButton: () => {
            history.goBack();
            dispatch(hideModal());
          },
          onAcceptButtonText: "CONTINUE",
          onRejectButtonText: "BACK TO MENU",
        })
      );
    }
    dispatch(_selectColor(color));
  };
}

function _selectColor(color) {
  return {
    type: COLOR_SELECT_ACTION,
    payload: color,
  };
}
export const openModal = ({
  title,
  onAcceptButton,
  onRejectButton,
  onAcceptButtonText,
  onRejectButtonText,
}) => {
  return {
    type: OPEN_ACTION,
    payload: {
      title: title,
      onAcceptButton: onAcceptButton,
      onRejectButton: onRejectButton,
      onAcceptButtonText: onAcceptButtonText,
      onRejectButtonText: onRejectButtonText,
    },
  };
};

export const hideModal = () => {
  return {
    type: HIDE_MODAL,
  };
};

export function updateScore({scoreType, score }) {
  return {
      type: UPDATE_SCORE_ACTION,
      payload:{
      scoreType: scoreType,
      score: score
      }
  }
}