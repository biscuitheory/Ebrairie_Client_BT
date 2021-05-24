import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const title = useSelector((state) => state.app.name);
  const user = useSelector((state) => state.auth.values);

  const Logout = (event) => {
    event.preventDefault();
    dispatch({ type: 'USER_RESET' });
    history.push('/login');
  };

  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
        {!user ? (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/" onClick={Logout}>
                Logout
              </Link>
            </li>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
