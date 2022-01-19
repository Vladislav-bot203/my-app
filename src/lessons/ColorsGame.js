import React, { useEffect, } from "react";
import ExpandedTile from "./components/ExpandedTile";
import styled from "styled-components";
import heart from "./images/heart.png";
import { useHistory, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  hideModal,
  modalCheck,
  openModal,
} from "./redux/action-creators/game_actions";
import "./fonts/fonts.css";
import { generateGame, selectColor } from "./redux/action-creators/game_actions";

const LivesWrapper = styled.div`
  padding-left: 50px;
`;

const Wrapper = styled.div`
  width: 100wh;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ColorCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: row;
`;

const MainColor = styled.div`
  height: 40px;
  width: 40px;
`;

const Counter = styled.span`
  align-self: center;
  margin-left: 10px;
`;

const Lives = styled.img`
  width: 40px;
  height: 40px;
`;

const Button = styled.button`
  height: 6vh;
  width: 6vw;
  font-family: "Roboto-Italic";
  font-weight: bold;
`;
const ButtonColor = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: red;
`;

const GuestColorWrapper = styled.div`
  display: flex;
  fle-direction: row;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const MaxScore = styled.div`
  margin-right: 150px;
`;

const ColorsGame = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const {colors, counter, guestColor, livesCount} = useSelector((state) => state.gameReducer);
useEffect(() => {
  dispatch(generateGame(location.state));
},[]);
  const score = useSelector((state) => {
    switch(location.state){
      case "EASY":
        return state.scoreReducer.scoreEasy;
        case "MEDIUM":
        return state.scoreReducer.scoreMedium;
        case "HARD":
        return state.scoreReducer.scoreHard;
        default: return 0;
    }
  });
  return (
    <Wrapper>
      <ColorCounter>
        <Button
          onClick={() =>
            dispatch(
              openModal({
                title: counter,
                onAcceptButton: () => dispatch(hideModal()),
                onRejectButton: () => {
                  history.goBack();
                  dispatch(hideModal());
                },
                onAcceptButtonText: "CONTINUE",
                onRejectButtonText: "BACK TO MENU",
              })
            )
          }
        >
          Exit
        </Button>
        <GuestColorWrapper>
          <MainColor style={{ backgroundColor: guestColor }} />
          <Counter>{counter}</Counter>
          <LivesWrapper>
            {new Array(livesCount).fill(<Lives src={heart}></Lives>)}
          </LivesWrapper>
        </GuestColorWrapper>
        <MaxScore>Score: {score}</MaxScore>
      </ColorCounter>
      {colors &&
        colors.map((color) => {
          return (
            <ExpandedTile
              color={color}
              onClick={() => dispatch(modalCheck(color, history))}
            />
          );
        })}
    </Wrapper>
  );
};
export default ColorsGame;
