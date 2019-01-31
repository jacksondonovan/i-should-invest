import React from 'react';
import { connect } from 'react-redux';

class TickerData extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    if(!this.props.tickerdata) {
      return <div></div>
    }

    return (
      <div>
        {this.props.tickerdata.companyName}
        <hr />
        {this.props.tickerdata.previousClose}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { tickerdata: state.stocks.tickerdata }
}

export default connect(mapStateToProps)(TickerData);
