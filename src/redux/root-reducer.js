import { combineReducers } from 'redux';

import plannerReducer from './planner/planner.reducer';

const rootReducer = combineReducers({
  planner: plannerReducer
});

export default rootReducer;