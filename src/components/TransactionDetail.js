import React, { Component } from 'react';
import CurrencyLabel from './CurrencyLabel';
import {currencyFormatted} from '../utils'

export default class TransactionDetail extends Component {
  render() {
    const {
        props: {coin,amount,type},
      } = this;
    let formatAmount = currencyFormatted(amount,coin)
    let [intAmount,decimalAmount] = formatAmount.split(".");
    
    let text = type === "send" ? "You send" : "Receiver gets";

    return (        
      <div className={"transaction-detail--"+type+" transaction-detail"}>
        <div className="transaction-detail__left">
          <div className="transaction-detail__header">{text}</div>
          <div className="transaction-detail__amount">
            <span>{intAmount}</span>
            <span className="decimal">{"."+decimalAmount}</span>
          </div>
        </div>
        <div className="transaction-detail__right">
          <CurrencyLabel  coin={coin}/>
        </div>
      </div>
    );
  }
}

