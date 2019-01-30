import { combineReducers } from 'redux';
import stocksReducer from './reducer-stocks';

export default combineReducers({
  stocks: stocksReducer
});
