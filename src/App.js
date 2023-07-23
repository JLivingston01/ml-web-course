import './App.css';
import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import About from './admin/About';
import Home from './admin/Home';
import Outline from './admin/Outline';

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
                <li>
                  <Link to="/admin/outline">Outline</Link>
                </li>
              </ul>
            </nav>
          </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin/about" element={<About />} />
              <Route path="/admin/outline/*" element={<Outline />} />
            </Routes>
        </div>
      );
  }
}

export default App;
