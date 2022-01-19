import { EASY_SCORE_TYPE, MEDIUM_SCORE_TYPE, UPDATE_SCORE_ACTION, HARD_SCORE_TYPE } from "../action-creators/score_actions";

const initialState = {
 scoreEasy: 0,
 scoreMedium: 0,
 scoreHard: 0,
}

export function scoreReducer(state = initialState, action) {
switch(action.type){
    case UPDATE_SCORE_ACTION:
        switch(action.payload.scoreType){
        case EASY_SCORE_TYPE:
        return{
            ...state,
            scoreEasy: action.payload.score
        };
        case MEDIUM_SCORE_TYPE:
        return{
            ...state,
            scoreMedium: action.payload.score
        };
        case HARD_SCORE_TYPE:
        return{
            ...state,
            scoreHard: action.payload.score
        };
        default: return state;
        }
    
    default: return state;
         }
}


