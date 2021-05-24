import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useAuth = () => {
  const auth = useSelector((state) => state.auth.user);
  console.log('auth', auth);
  return auth !== null;
};

const AuthRoute = ({ component, exact, path, ...props }) => {
  const Component = component;
  const isLogged = useAuth();

  if (!isLogged) return <Redirect to="/login" />;

  return (
    <Route exact={exact} path={path} render={() => <Component {...props} />} />
  );
};

export { useAuth, AuthRoute };
