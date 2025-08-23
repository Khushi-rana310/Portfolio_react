import React from 'react';
import './Patent.css';

const Patent = () => {
  return (
    <div id="patent" className="patent-section">
      <h1>Patent Publication</h1>
      <div className="patent-card">
        <h2>Agri Farmanet (KAVYA FARMNET)</h2>
        <p><strong>Application Number:</strong>202511064025 A </p>
        <p>
          Published patent for an AI-integrated farm management system that helps farmers 
          monitor crop health, automate irrigation, and optimize yield using real-time data 
          and predictive analytics.
        </p>
      </div>
    </div>
  );
};

export default Patent;
