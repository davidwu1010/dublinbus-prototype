import { combineReducers } from 'redux';

import plannerReducer from './planner/planner.reducer';
import drawerReducer from './drawer/drawer.reducer';

const rootReducer = combineReducers({
  planner: plannerReducer,
  drawer: drawerReducer
});

export default rootReducer;