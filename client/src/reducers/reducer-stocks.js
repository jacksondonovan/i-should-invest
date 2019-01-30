import  { FETCH_STOCK_DATA, SELECT_STOCK } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STOCK_DATA:
      return action.payload
      break;
    case SELECT_STOCK:
      return {}
      break;
    default:
      return state;
  }
}
