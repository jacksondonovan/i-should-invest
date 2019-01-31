import  { FETCH_STOCK_DATA, SELECT_STOCK } from '../actions/types';

// const INITIAL_STATE = {
//   ticker: null
// }

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STOCK_DATA:
      console.log(action.payload);
      return { ...state, tickerdata: action.payload }
    case SELECT_STOCK:
      return {}
    default:
      return state;
  }
}
