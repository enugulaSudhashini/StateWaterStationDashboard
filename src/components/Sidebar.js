// src/components/Sidebar.js
import React from 'react';

const Sidebar = ({ states, onSelectState }) => {
  return (
    <div style={{ padding: '20px', borderRight: '1px solid #ccc', width: '200px' }}>
      <h2>States</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {states.map(state => (
          <li key={state.code} style={{ margin: '10px 0' }}>
            <button
              onClick={() => onSelectState(state)}
              style={{ background: 'none', border: 'none', color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}
            >
              {state.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
