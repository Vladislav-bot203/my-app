import { OPEN_ACTION, HIDE_MODAL } from "../action-creators/game_actions";

const initialState = {
    visibility: false,
    title: 0,
    onAcceptButton: () => console.log("Here we go again"),
    onRejectButton: () => console.log("Loser"),
    onAcceptButtonText: "CONTINUE",
    onRejectButtonText: "EXIT TO MENU"
};


export function modalOpenerReducer(state=initialState, action){
    switch(action.type){
        case OPEN_ACTION:
            return {
                ...state,
                visibility: true,
                title: action.payload.title,
                onAcceptButton: action.payload.onAcceptButton,
                onRejectButton: action.payload.onRejectButton,
                onAcceptButtonText: action.payload.onAcceptButtonText,
                onRejectButtonText: action.payload.onRejectButtonText
            }
        case HIDE_MODAL: 
        return {
            ...state,
            visibility: false
        } 
        default:
            return state; 
    }
}
