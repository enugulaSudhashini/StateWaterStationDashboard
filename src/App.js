// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import StateWaterChart from './components/StateWaterChart';

// Complete list of states and union territories with mock water station data
const stateData = [
  { code: 'AP', name: 'Andhra Pradesh', waterStations: 1200 },
  { code: 'AR', name: 'Arunachal Pradesh', waterStations: 600 },
  { code: 'AS', name: 'Assam', waterStations: 850 },
  { code: 'BR', name: 'Bihar', waterStations: 1100 },
  { code: 'CT', name: 'Chhattisgarh', waterStations: 750 },
  { code: 'GA', name: 'Goa', waterStations: 400 },
  { code: 'GJ', name: 'Gujarat', waterStations: 1400 },
  { code: 'HR', name: 'Haryana', waterStations: 700 },
  { code: 'HP', name: 'Himachal Pradesh', waterStations: 300 },
  { code: 'JH', name: 'Jharkhand', waterStations: 1050 },
  { code: 'KA', name: 'Karnataka', waterStations: 950 },
  { code: 'KL', name: 'Kerala', waterStations: 500 },
  { code: 'MP', name: 'Madhya Pradesh', waterStations: 1700 },
  { code: 'MH', name: 'Maharashtra', waterStations: 1200 },
  { code: 'MN', name: 'Manipur', waterStations: 200 },
  { code: 'ML', name: 'Meghalaya', waterStations: 150 },
  { code: 'MZ', name: 'Mizoram', waterStations: 100 },
  { code: 'NL', name: 'Nagaland', waterStations: 120 },
  { code: 'OD', name: 'Odisha', waterStations: 900 },
  { code: 'PB', name: 'Punjab', waterStations: 800 },
  { code: 'RJ', name: 'Rajasthan', waterStations: 1700 },
  { code: 'SK', name: 'Sikkim', waterStations: 50 },
  { code: 'TN', name: 'Tamil Nadu', waterStations: 1900 },
  { code: 'TG', name: 'Telangana', waterStations: 1000 },
  { code: 'TR', name: 'Tripura', waterStations: 180 },
  { code: 'UP', name: 'Uttar Pradesh', waterStations: 1300 },
  { code: 'UT', name: 'Uttarakhand', waterStations: 320 },
  { code: 'WB', name: 'West Bengal', waterStations: 980 },
  { code: 'AN', name: 'Andaman and Nicobar Islands', waterStations: 30 },
  { code: 'CH', name: 'Chandigarh', waterStations: 20 },
  { code: 'DN', name: 'Dadra and Nagar Haveli and Daman and Diu', waterStations: 10 },
  { code: 'LD', name: 'Lakshadweep', waterStations: 5 },
  { code: 'DL', name: 'Delhi', waterStations: 600 },
  { code: 'PY', name: 'Puducherry', waterStations: 40 },
  { code: 'LA', name: 'Ladakh', waterStations: 10 },
  { code: 'JK', name: 'Jammu and Kashmir', waterStations: 350 },
];

// Dashboard component
const Dashboard = ({ selectedState }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>State Water Station Dashboard</h1>
      {selectedState ? (
        <>
          <h2>{selectedState.name}</h2>
          <p>{`Number of water stations: ${selectedState.waterStations}`}</p>
        </>
      ) : (
        <p>Select a state to see its water stations information.</p>
      )}
      {/* Include the bar chart */}
      <StateWaterChart data={stateData} />
    </div>
  );
};

// Main App component
const App = () => {
  const [selectedState, setSelectedState] = useState(null);

  const handleSelectState = (state) => {
    setSelectedState(state);
  };

  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar states={stateData} onSelectState={handleSelectState} />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route
              path="/"
              element={<Dashboard selectedState={selectedState} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
