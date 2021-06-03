import './App.css';

import Topics from './components/Topics';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Home from './components/Home';
import Posts from './components/Posts';


function App() {
  return (
    <>
      <Router>
        <Topics />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/posts" component={Posts} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
