import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
