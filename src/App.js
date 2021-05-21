// import "./App.css";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Task1 from "./components/Task1";
import Task2 from "./components/Task2";

function App() {
  return (
  <Router>
    <Switch>
      <Route exact path="/" render={(props) => <Task1 {...props} />} />
      <Route exact path="/task2" render={(props) => <Task2 {...props} />} />
      </Switch>
</Router>


  )
}

export default App;
