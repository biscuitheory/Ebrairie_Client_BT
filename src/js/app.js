import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/layout';
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Resources from './pages/resources';
import Resource from './pages/resource';
import Loans from './pages/loans';

const App = () => {
  const dispatch = useDispatch();
  const appState = useSelector((state) => state.app);

  useEffect(() => {
    dispatch({ type: 'APP_INIT' });

    setTimeout(() => {
      dispatch({ type: 'APP_READY' });
    }, 2000);
  }, []);

  console.log('APP global state : ', appState);

  if (appState.loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/resources" component={Resource} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/loans" component={Loans} />
        </Layout>
      </Switch>
    </Router>
  );
};

export default App;
