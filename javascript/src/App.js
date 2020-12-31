import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Posts from "./component/Posts";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={() => <Redirect to='/posts' />} />
        <Route exact path='/posts' component={Posts} />
      </Switch>
    </Router>
  );
}

export default App;
