import {combineReducers} from 'redux';
import countReducer from './countReducer';
import userReducer from './userReducer';
import gameReducer from './GameReduce';

const rootReducer = combineReducers({
  countReducer,
  userReducer,
  gameReducer,
});

export default rootReducer;
