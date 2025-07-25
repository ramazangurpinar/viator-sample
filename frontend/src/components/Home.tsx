import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import beachImage from '../images/back.jpg';

const Home = () => {
  const [whereTo, setWhereTo] = useState('');
  const [when, setWhen] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (whereTo) params.append('where', whereTo);
    if (when) params.append('when', when);
    navigate(`/search?${params.toString()}`);
  };

  return (
    <div className="home-container" style={{ backgroundImage: `url(${beachImage})` }}>
      <div className="overlay">
        <div className="home-content">
          <h1>Hi Traveller!</h1>
          <p>Plan better with 300,000+ travel experiences.</p>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Where to?"
              value={whereTo}
              onChange={(e) => setWhereTo(e.target.value)}
            />
            <input
              type="date"
              placeholder="When?"
              value={when}
              onChange={(e) => setWhen(e.target.value)}
            />
            <button onClick={handleSearch}>🔍</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
