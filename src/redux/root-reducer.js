import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import plannerReducer from './planner/planner.reducer';
import drawerReducer from './drawer/drawer.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
  key: 'dublinbus',
  storage,
  whitelist: []
}

const rootReducer = combineReducers({
  planner: plannerReducer,
  drawer: drawerReducer,
  user: userReducer
});

export default persistReducer(persistConfig, rootReducer);