import React from 'react';
import { Link } from 'react-router-dom';

const LoggedNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/loans">Loans</Link>
        </li>
      </ul>
    </nav>
  );
};

export default LoggedNav;
