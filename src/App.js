import ColorsGame from "./lessons/ColorsGame";
import { Switch, Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import LevelSelect from "./lessons/LevelSelect";
import Modal from "./lessons/components/Modal";
import { useSelector } from "react-redux";

const App = ({ history }) => {
const modalState = useSelector(state => state.openReducer);
const scoreState = useSelector(state => state.scoreReducer);
console.log(scoreState);
console.log(modalState);
return (
    <Router>
      <Modal visibility={modalState.visibility} title={modalState.title} onAccept={modalState.onAcceptButton} onReject={modalState.onRejectButton} acceptButtonText={modalState.onAcceptButtonText} rejectButtonText={modalState.onRejectButtonText}></Modal>
    <Switch>
      <Route history={history} path="/select-level" component={LevelSelect} />
      <Route history={history} path="/game" component={ColorsGame} />
      <Redirect from="/" to="/select-level"></Redirect>
    </Switch>
    </Router>
  );
};

export default App;
