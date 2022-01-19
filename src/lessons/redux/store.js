import { applyMiddleware, combineReducers, createStore } from "redux";
import { modalOpenerReducer } from "./reducers/modal_opener_reducer";
import { scoreReducer } from "./reducers/score_reducer";
import { gameReducer} from "./reducers/game_reducer";
import thunk from "redux-thunk";

export const store = createStore(
    combineReducers({
     openReducer: modalOpenerReducer,
     scoreReducer: scoreReducer,
     gameReducer: gameReducer,
    }),
    applyMiddleware(thunk)
);