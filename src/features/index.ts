import { combineReducers } from 'redux';

import api from '@features/slices/api';

import userReducer from './slices/user';
import uiReducer from './slices/ui';

export default combineReducers({
  user: userReducer,
  ui: uiReducer,
  [api.reducerPath]: api.reducer,
});
