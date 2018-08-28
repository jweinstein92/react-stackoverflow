import React, { Component } from 'react';

class LargeNumber extends Component {
  numberWithCommas(x) {
    if (isNaN(x)) {
      return '';
    }
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    const numberString = this.numberWithCommas(this.props.number);
    return (
      <span>{numberString}</span>
    );
  }
}

export default LargeNumber;
