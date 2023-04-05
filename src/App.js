import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Greetings from './components/Greetings';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Link to="/greetings">View Greetings</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greetings" element={<Greetings />} />
      </Routes>
    </div>
  );
}

export default App;
