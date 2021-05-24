import { combineReducers } from 'redux';

import initialStateReducer from './main';
import authReducer from './auth';
import resourcesReducer from './resources';

// export du reducer assignee a la clé app
const rootReducer = combineReducers({
  app: initialStateReducer,
  auth: authReducer,
  resources: resourcesReducer,
});

export default rootReducer;
