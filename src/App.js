
import './style.css';
import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import Home from './admin/Home';
import Outline from './admin/Outline';
import LoginButton from './admin/LoginButton';
import LogoutButton from './admin/LogoutButton';
import Profile from './admin/Profile';
import { useAuth0 } from "@auth0/auth0-react";


const App = () => {

  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  
  if (isAuthenticated) {
    return (
      isAuthenticated && (
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
              <LogoutButton />
              <h3>Welcome {user.name}</h3>
            </div >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin/outline/*" element={<Outline />} />
                <Route path="/admin/profile" element={<Profile />} />
              </Routes>
            </div>
      )
    );
  } 

  return (
      (
        <div className="grid-container">
            <div className="grid-item top-row">
              <nav>
                <ul id="navigation">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                </ul>
              </nav>
              <LoginButton />
    
            </div >
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </div>
      )  
    );
};


export default App;
