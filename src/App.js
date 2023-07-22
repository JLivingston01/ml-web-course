import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <div>
        <nav>
            <ul id="navigation">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
      </div>
      <Switch>
          <Route exact path="/">
          <Home />
          </Route>
          <Route path="/about">
          <About />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
