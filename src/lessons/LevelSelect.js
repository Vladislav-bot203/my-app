import styled from "styled-components";
import background from "./images/background.jpg";
import "./fonts/fonts.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Global = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${background});
`;

const Button = styled.button`
  width: 300px;
  height: 100px;
  background: purple;
  font-weight: bold;
  font-size: 17pt;
  position: relative;
  font-family: "Roboto-Italic";
`;
const Wrapper = styled.div`
  width: 400px;
  height: 100vh;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const Score = styled.h1`
  width: 10vw;
  height: 10vh;
  text-align: center;
`;
const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100vw;
  font-family: "Roboto-Italic";
`;

const LevelSelect = () => {
  const state = useSelector((state) => state.scoreReducer);
  return (
    <Global>
      <Wrapper>
        <ScoreWrapper>
          <Score>Easy: {state.scoreEasy}</Score>
          <Score>Medium: {state.scoreMedium} </Score>
          <Score>Hard: {state.scoreHard}</Score>
        </ScoreWrapper>
        <Link
          to={{
            pathname: "/game",
            state: "EASY",
          }}
        >
          <Button>EASY</Button>
        </Link>
        <Link
          to={{
            pathname: "/game",
            state: "MEDIUM",
          }}
        >
          <Button>MEDIUM</Button>
        </Link>
        <Link
          to={{
            pathname: "/game",
            state: "HARD",
          }}
        >
          <Button>HARD</Button>
        </Link>
      </Wrapper>
    </Global>
  );
};

export default LevelSelect;



