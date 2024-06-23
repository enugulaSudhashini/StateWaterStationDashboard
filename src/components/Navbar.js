import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px 50px', background: '#eee', position: 'fixed', top: 0, width: '100%', zIndex: 100 }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Dashboard</Link>
    </nav>
  );
};

export default Navbar;
