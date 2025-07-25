import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SearchEvents from './components/SearchEvents';
import EventDetailPage from './pages/EventDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchEvents />} />
        <Route path="/event/:id" element={<EventDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;

