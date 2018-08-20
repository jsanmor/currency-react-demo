import React, { Component } from 'react';
import TransactionDetail from './TransactionDetail';

export default class TransactionInfo extends Component {
  render() {
    return (
    <div className="transaction">
        <p className="transaction__header">Lets set up your transaction</p>
        <p className="transaction__subheader">Sepecify the amount to be sent or received.</p>
        <TransactionDetail type="send" coin="EUR" amount="2000"></TransactionDetail>
        <TransactionDetail type="receive" coin="GBP" amount="1417.94" ></TransactionDetail>
      </div>
    );
  }
}

