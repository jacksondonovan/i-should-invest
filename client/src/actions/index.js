import axios from 'axios';
import { FETCH_STOCK_DATA } from './types';

export const fetchStockData = (ticker) => async (dispatch) => {
  const response = await axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/batch?types=quote,chart&range=1m&last=1`);

  console.log(response.data);

  dispatch({ type: FETCH_STOCK_DATA, payload: response.data.quote });
}
