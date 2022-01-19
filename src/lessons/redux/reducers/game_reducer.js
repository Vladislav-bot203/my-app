
import {
  getRandomColors,
  getRandomValue,
} from "../../utils/random";
import {
  GENERATE_GAME_ACTION,
  COLOR_SELECT_ACTION,
} from "../action-creators/game_actions";

const initialState = {
  livesCount: 0,
  counter: 0,
  difficulty: "",
  colors: [],
  guestColor: null,
  
};

export function gameReducer(state = initialState, action) {
  switch (action.type) {
    case GENERATE_GAME_ACTION: {
      const { guestColor, livesCount, colors } = getGameValues(action.payload);
      return {
        ...state,
        difficulty: action.payload,
        colors: colors,
        counter: 0,
        guestColor: guestColor,
        livesCount: livesCount,
      };
    }
    case COLOR_SELECT_ACTION: {
      const { colors, guestColor, livesCount} = getGameValues(state.difficulty);
      if(state.guestColor !== action.payload){
        if(state.livesCount === 1){
          return{
            ...state,
            colors: colors,
            guestColor: guestColor,
            livesCount: livesCount,
            counter: 0,
          } 
        } else {
          return{
            ...state,
            livesCount: state.livesCount-1,
            guestColor: guestColor,
            colors: colors,
          }
        }
      } else {
        return{
         ...state,
         counter: state.counter+1,
         colors: colors,
         guestColor: guestColor,
        }
      }
    }
    default:
      return state;
  }
}

function getGameValues(difficulty) {
  switch (difficulty) {
    case "EASY": {
      const colors = getRandomColors(10);
      return {
        livesCount: 3,
        colors: colors,
        guestColor: colors[getRandomValue(0, 9)],
      };
    }
    case "MEDIUM": {
      const colors = getRandomColors(15);
      return {
        livesCount: 2,
        colors: colors,
        guestColor: colors[getRandomValue(0, 14)],
      };
    }
    case "HARD": {
      const colors = getRandomColors(20);
      return {
        livesCount: 1,
        colors: colors,
        guestColor: colors[getRandomValue(0, 19)],
      };
    }
    default:
      return null;
  }
}
