import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Map from './pages/Map';
import Animation from './pages/Animation';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>The Brilliant Portal</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/map">Map</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/map" element={<Map />} />
          <Route path="/animation" element={<Animation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
