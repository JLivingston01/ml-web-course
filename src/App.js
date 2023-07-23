import './App.css';
import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import About from './admin/About';
import Home from './admin/Home';

class App extends React.Component {
  render() {
      return (
        <div className="App">
          <div>
            <nav>
              <ul id="navigation">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/admin/about">About</Link>
                </li>
              </ul>
            </nav>
          </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin/about" element={<About />} />
            </Routes>
        </div>
      );
  }
}

export default App;
