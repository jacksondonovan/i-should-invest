import React from 'react';
import { fetchStockData } from '../actions';
import { connect } from 'react-redux';

class Stocks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticker: ''
    }
  }

  onChangeTickerInput = (e) => {
    this.setState({ ticker: e.target.value });
  }

  onSumbitTicker = () => {
    this.props.fetchStockData(this.state.ticker);
    this.setState({ ticker: '' });
  }

  render() {
    return (
      <div>
        <h3>Enter a ticker</h3>
        <input type="text" value={this.state.ticker} onChange={onChangeTickerInput} />
        <button onClick={this.onSumbitTicker}>Go!</button>
        <hr />
      </div>
    );
  }
}

export default connect(null, { fetchStockData })(Stocks);
