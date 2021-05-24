import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import api from './utils/api';
import { AuthRoute } from './components/common/authRoute';

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

  useEffect(async () => {
    dispatch({ type: 'APP_INIT' });
    dispatch({ type: 'USER_FETCH' });

    try {
      const userResult = await api.get('/admin/me');
      dispatch({ type: 'USER_SET', payload: userResult.data });
      const resourcesResult = await api.get('/resources');
      dispatch({ type: 'RESOURCES_SET', payload: resourcesResult.data });
    } catch (error) {
      console.error(error);
      dispatch({ type: 'USER_RESET' });
    }

    dispatch({ type: 'APP_READY' });
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
          <Route path="/resources" component={Resources} />
          <Route path="/resource" component={Resource} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <AuthRoute eaxct path="/dashboard" component={Dashboard} />
          <AuthRoute exact path="/loans" component={Loans} />
        </Layout>
      </Switch>
    </Router>
  );
};

export default App;
