import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

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

  return <h1>Hello peeps</h1>;
};

export default App;
