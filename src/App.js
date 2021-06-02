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
import Posts from './components/Posts';
import Home from './components/Home';
import Post from './components/Post';


function App() {
  return (
    <>
      <Router>
        <Topics />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/posts" component={Posts} />  {/* New way */}

        </Switch>
      </Router>
    </>
  );
}

export default App;
