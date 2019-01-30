import axios from 'axios';

export const fetchStockData = (ticker) => async (dispatch) => {
  const response = await axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/batch?types=quote,chart&range=1m&last=1`);

  dispatch({ type: FETCH_STOCK_DATA, payload: response.quote });
}
