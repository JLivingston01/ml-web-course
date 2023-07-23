
import './style.css';
import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import Home from './admin/Home';
import Outline from './admin/Outline';
import LoginButton from './admin/LoginButton';
import LogoutButton from './admin/LogoutButton';
import Profile from './admin/Profile';

class App extends React.Component {
  render() {
      return (
        <div className="grid-container">
          <div className="grid-item top-row">
            <nav>
              <ul id="navigation">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/admin/outline">Outline</Link>
                </li>
                <li>
                  <Link to="/admin/profile">Profile</Link>
                </li>
              </ul>
            </nav>
            <LoginButton />
            <LogoutButton />

          </div >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin/outline/*" element={<Outline />} />
              <Route path="/admin/profile" element={<Profile />} />
            </Routes>
          </div>
      );
  }
}

export default App;
