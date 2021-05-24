import { combineReducers } from 'redux';

import initialStateReducer from './main';
import authReducer from './auth';

// export du reducer assignee a la clé app
const rootReducer = combineReducers({
  app: initialStateReducer,
  auth: authReducer,
});

export default rootReducer;
