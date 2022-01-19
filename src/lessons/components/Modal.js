import styled from "styled-components";
import "../fonts/fonts.css";

const Global = styled.div`
  display: block;
  position: absolute;
  height: 100vh;
  width: 100vw;
  font-family: "Roboto-Italic";
  background-color: rgba(0, 0, 0, 0.5);
`;
const FlexContainer = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0);
  width: 100vw;
  height: 100vh;   
`;

const Wrapper = styled.div`

  height: 50vh;
  width: 70vw;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: auto;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
`;
const Title = styled.div`
  width: 50%;
  height: 5vh;
  text-align: center;
  font-weight: bold;
  color: white;
`;

const Button = styled.button`
  height: 6vh;
  width: 30vw;
  border-radius: 20%;
  background-color: purple;
  font-weight: bold;
  color: white;
`;

const Modal = ({
  visibility,
  title,
  onAccept,
  onReject,
  acceptButtonText,
  rejectButtonText,
}) => {
  return (
  <Global style={{ display: visibility ? "block" : "none" }}>
    <FlexContainer>
      <Wrapper>
        <Title>{title}</Title>
        <Button onClick={onAccept}>{acceptButtonText}</Button>
        <Button onClick={onReject}>{rejectButtonText}</Button>
      </Wrapper>
    </FlexContainer>
  </Global>
  );
};

export default Modal;
